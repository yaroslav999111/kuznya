import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {ProjectsService} from "../../../../services/projects.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../../../services/login.service";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-separate-people',
  templateUrl: './separate-people.component.html',
  styleUrls: ['./separate-people.component.scss']
})
export class SeparatePeopleComponent implements OnInit {
  userDetails: any;
  currentProjects: any;
  position: any = { status: 1};
  isLogin: boolean = false;
  ratingOfCurrentMan: any;
  myRating: number;
  greenColor: string = '';
  blackColor: string = '';
  constructor(public authGuard: AuthService, public userService: UsersService, public projectsService: ProjectsService, public loginService: LoginService) { }

  ngOnInit() {
    this.isInProject();
    this.getCurrentUser();
    this.countRating();
  }

  countRating() {
    let str1 = [];
    let sum = 0;
    if(this.userDetails.rating) {
      let names = this.userDetails.rating;

      let arr = names.split(', ');

      for (let i = 0; i < arr.length; i++) {
        str1.push(+arr[i]);
      }
    } else {
      console.log('no rating');
    }

    for (var i = 0; i < str1.length; i++) {
     sum += str1[i];
    }

    this.myRating = Math.round(sum / str1.length);


    this.howMuchStars();
  }


  emailForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl('')
  });


  sendEmail() {
    const userData = {name: '', sname: '', email: '', message: this.emailForm.value.message, emailTo: this.userDetails.email};

    this.loginService.currentUserInformation.subscribe(data => {
      userData.name = localStorage.getItem('username');
      userData.sname = data['sname'];
      userData.email = localStorage.getItem('userEmail');
    });

    this.userService.sendEmail(userData).subscribe(data => {
      console.log(data, 'lalal');
    });

  }

  howMuchStars() {
    switch (this.myRating) {
      case undefined : this.greenColor = '' ; this.blackColor = '★★★★★★★★★★';
        break;
      case 1 : this.greenColor = '★' ; this.blackColor = '★★★★★★★★★';
      break;
      case 2: this.greenColor = '★★' ; this.blackColor = '★★★★★★★★';
      break;
      case 3: this.greenColor = '★★★' ; this.blackColor = '★★★★★★★';
      break;
      case 4: this.greenColor = '★★★★' ; this.blackColor = '★★★★★★';
      break;
      case 5: this.greenColor = '★★★★★' ; this.blackColor = '★★★★★';
      break;
      case 6: this.greenColor = '★★★★★★' ; this.blackColor = '★★★★';
      break;
      case 7: this.greenColor = '★★★★★★★' ; this.blackColor = '★★★';
      break;
      case 8: this.greenColor = '★★★★★★★★' ; this.blackColor = '★★';
      break;
      case 9: this.greenColor = '★★★★★★★★★' ; this.blackColor = '★';
      break;
      case 10: this.greenColor = '★★★★★★★★★' ; this.blackColor = '';
      break;
    }
  }

  isInProject() {
    this.authGuard.userIsLogin.subscribe(data => {
      if  (data['isLogin'] === 'true' || localStorage.getItem('userEmail') != undefined) {
        this.isLogin = true;
      }
    });
  }

  profileForm = new FormGroup({
    position: new FormControl(''),
  });

  getCurrentUser() {
    this.userService.userDetails.subscribe(data => {
      this.userDetails = data;
      this.getProjectsByEmail();
    });
  }

  getProjectsByEmail() {
      const userDetails = this.userDetails;
      this.projectsService.getMyProjects(userDetails).subscribe(data => {
        this.currentProjects = data;
      });

  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

  onSubmit() {
    const user = {email: this.userDetails.email, rating: this.position.status};
    this.loginService.addRating(user).subscribe(data => {
      this.userDetails = data;
      this.countRating();
    });
  }

}
