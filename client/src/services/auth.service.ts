import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class AuthService {
  isLoggedIn = false;
  userIsLogin = new BehaviorSubject({'isLogin': 'false'});
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): any {
    // return (true).pipe(
    //   delay(1000),
    //   tap(val => this.isLoggedIn = true)
    // );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
