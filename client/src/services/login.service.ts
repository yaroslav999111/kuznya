import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoginService implements OnInit {
  mainUrl: string = 'http://localhost:3333/';
  currentUser = new BehaviorSubject({});

  constructor(public http: HttpClient) {
  }

  ngOnInit() {

  }

  getUsers(): Observable<any> {
    return this.http.get('/api/users')
      .map((res: Response) => {
        return res;
      });
  }

  addUser(user: any): Observable<any> {
    return this.http.post('/api/addUser', {username: user.username, password: user.password})
      .map((res: Response) => {
        return res;
      })
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.mainUrl + 'register', {username: user. name, sname: user.sname, mobile: user.mobile, email: user.email, password: user.password})
      .map((res: Response) => {
        return res;
      });
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(this.mainUrl + 'login', {email: user.email, password: user.password})
      .map((res: Response) => {
        return res;
      });
  }


}
