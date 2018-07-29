import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthGuard} from "../../services/auth-guard.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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

  constructor(public authGuard: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.loginForm.value["email"] == "test@ukr.net" && this.loginForm.value["password"]=="123456789") {
      // this.authGuard.userIsLogin.next({'isLogin': 'true'});
      this.correctForm = false;
      this.correctLogin = true;
      // setTimeout(function() {this.router.navigate(['main']) }, 3000);
      this.authGuard.userIsLogin.next({'isLogin': 'true'});
      this.router.navigate(['main']);

    } else {
      this.correctForm = true;
      this.correctLogin = false;
    }
  }

}
