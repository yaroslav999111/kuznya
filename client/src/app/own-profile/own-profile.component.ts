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

  constructor(public loginService: LoginService) { }

  ngOnInit() {
   this.profileInformation =  this.loginService.currentUserInformation.value;
   console.log( this.profileInformation );
  }

  onSubmit() {
    const updateUserData = {
      mobile: this.profileForm.value.mobile,
      password: this.profileForm.value. password,
      username: this.profileForm.value.username,
      sname: this.profileForm.value.sname,
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
      site: this.profileForm.value. site,
      position: this.profileForm.value.position,
      about: this.profileForm.value.about,
      freeOrBusy: this.profileForm.value.freeOrBusy,
    };
    // console.log( updateUserData);
    this.loginService.updateUser(updateUserData).subscribe(data => {
      console.log(data)
    });

  }

}
