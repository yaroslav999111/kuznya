import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UsersService implements OnInit {
  mainUrl: string = 'http://localhost:3333/';

  userDetails = new BehaviorSubject({});
  positionInCompany = new BehaviorSubject({});
  constructor(public http: HttpClient) {
  }

  ngOnInit() {

  }

  getAllUsers() {
    return this.http.get(this.mainUrl + 'users')
      .map((res: Response) => {
        return res;
      });
  }

  sendEmail(userData: any) {
    return this.http.post(this.mainUrl + 'projects/sendemail', {email: userData.email, name: userData.name, sname: userData.sname, message: userData.message, emailTo: userData.emailTo})
      .map((res: Response) => {
        return res;
      });
  }


}
