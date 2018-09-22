import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "../services/auth-guard.service";
import {AuthService} from "../services/auth.service";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOnline: boolean;
  userName: any;

  ngOnInit() {
      this.check();
  }

  check() {
    this.authGuard.userIsLogin.subscribe(data => {
      if (data['isLogin'] === 'false' && !localStorage.getItem('userEmail')){
      this.isOnline = false;
    } else {
      this.isOnline = true;
        this.userName = localStorage.getItem('username');
    }
  });
}


  logouts() {
    this.isOnline = false;
    localStorage.clear();
    this.router.navigate(['login']);
  }

  constructor(public authGuard: AuthService,  public loginService: LoginService, public router: Router) {}
}
