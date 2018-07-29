import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  correctForm: boolean = false;
  correctLogin: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.loginForm.value["email"] == "test@ukr.net" && this.loginForm.value["password"]=="123456789") {
      this.correctForm = false;
      this.correctLogin = true;
    } else {
      this.correctForm = true;
      this.correctLogin = false;
    }
  }

}
