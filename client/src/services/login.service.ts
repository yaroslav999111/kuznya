import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoginService implements OnInit {
  mainUrl: string = 'http://localhost:3333/';
  currentUser = new BehaviorSubject({});
  currentUserInformation = new BehaviorSubject({});

  constructor(public http: HttpClient) {
  }

  ngOnInit() {

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

  getUserDetailsById(userId: any): Observable<any> {
    return this.http.post(this.mainUrl + 'login/getUserByIds', {email: userId})
      .map((res: Response) => {
        return res;
      });
  }

  updateUser(user: any): Observable<any> {
    return this.http.post(this.mainUrl + 'register/update', user)
      .map((res: Response) => {
        return res;
      });
  }

  addRating(user: any): Observable<any> {
    return this.http.post(this.mainUrl + 'login/addRating', {email: user.email, rating: user.rating})
      .map((res: Response) => {
        return res;
      });
  }

  updatePostUserEmailForCategories(user: any): Observable<any> {
    return this.http.post(this.mainUrl + 'projects/update', user)
      .map((res: Response) => {
        return res;
      });
  }

  addProject(project: any): Observable<any> {
    return this.http.post(this.mainUrl + 'projects', project)
      .map((res: Response) => {
        return res;
      });
  }


}
