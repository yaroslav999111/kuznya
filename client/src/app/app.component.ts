import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "../services/auth-guard.service";
import {AuthService} from "../services/auth.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOnline: boolean;
  userName: any;

  ngOnInit() {
    this.authGuard.userIsLogin.subscribe(data => {
      if (data['isLogin'] === 'false'){
        this.isOnline = false;
      } else {
        this.isOnline = true;
      }
    });

    this.loginService.currentUser.subscribe(data => {
      this.userName = data['name'];
    });
  }

  logouts() {
    this.isOnline = false;

  }

  constructor(public authGuard: AuthService,  public loginService: LoginService) {}
}
