import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  passMath: boolean = true;
  enterName: boolean = true;
  enterEmail: boolean = true;
  allForm: boolean = false;
  allForm2: boolean = false;
  allForm3: boolean = false;
  allForm4: boolean = true;
  registrationForm = new FormGroup({
    name: new FormControl(''),
    sname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    checkPass: new FormControl(''),
  });

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

    if (this.registrationForm.value["password"] === this.registrationForm.value["checkPass"]) {
      this.passMath = true;
      this.allForm = true;
    } else if (this.registrationForm.value["password"] !== this.registrationForm.value["checkPass"]) {
      this.passMath = false;
      this.allForm = false;
    }

    if(this.registrationForm.value["password"].length == 0 || this.registrationForm.value["checkPass"].length == 0) {
      this.allForm4 = false;
    } else {
      this.allForm4 = true;
    }

   if (this.registrationForm.value["name"].length == 0) {
      this.enterName = false;
     this.allForm2 = false;
   } else if(this.registrationForm.value["name"].length !== 0) {
      this.enterName = true;
     this.allForm2 = true;
    }

    if (this.registrationForm.value["email"].length == 0) {
     this.enterEmail = false;
      this.allForm3 = false;
  } else if (this.registrationForm.value["email"].length !== 0) {
      this.enterEmail = true;
      this.allForm3 = true;
    }

    this.checkForCorrectEnter();

  }

  checkForCorrectEnter() {
    if(this.allForm && this.allForm2 && this.allForm3 && this.allForm4) {
      this.loginService.registerUser(this.registrationForm.value).subscribe(data => {
      };
    })
  }


}
