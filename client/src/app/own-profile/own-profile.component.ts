import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-own-profile',
  templateUrl: './own-profile.component.html',
  styleUrls: ['./own-profile.component.scss']
})
export class OwnProfileComponent implements OnInit {
  profileInformation: any;
  category: any = { status: 0 };
  profileForm = new FormGroup({
    mobile: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    sname: new FormControl(''),
    email: new FormControl(''),
    site: new FormControl(''),
    position: new FormControl(''),
    about: new FormControl(''),
    freeOrBusy: new FormControl(''),
  });

  projectForm = new FormGroup({
    title: new FormControl(''),
    story: new FormControl(''),
    category: new FormControl(''),
  });

  constructor(public loginService: LoginService) { }

  ngOnInit() {
   this.profileInformation = this.loginService.currentUserInformation.value;
  }

  saveProject() {
    const project = {
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
      title: this.projectForm.value.title,
      story: this.projectForm.value.story,
      category: this.projectForm.value.category
    };

    this.loginService.addProject(project).subscribe(data => {
      console.log(data);
    });


  }

  onSubmit() {
    const updateUserData = {
      mobile: this.profileForm.value.mobile,
      password: this.profileForm.value. password,
      username: this.profileForm.value.username,
      sname: this.profileForm.value.sname,
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
      site: this.profileForm.value.site,
      position: this.profileForm.value.position,
      about: this.profileForm.value.about,
      freeOrBusy: this.profileForm.value.freeOrBusy,
    };
    this.loginService.updateUser(updateUserData).subscribe(data => {
     this.loginService.currentUserInformation.next(data);
      this.profileInformation = this.loginService.currentUserInformation.value;
    });

    if (this.profileForm.value.email) {
      this.updateUserEmailForCategories();
    }

  }


  updateUserEmailForCategories() {
    const updateUserData = {
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
    };

    this.loginService.updatePostUserEmailForCategories(updateUserData).subscribe(data => {
    });

  }

}
