import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService implements OnInit {

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
  }

  login(loginData: any): Observable<any> {
    return this.http.post('/api/login', {username: loginData.username, password: loginData.password})
      .map((res: Response) => {
        return res;
      })
  }

  logout(): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get('/api/' + `${token}` + '&userOnlineStatus=0')
      .map((res: Response) => {
        return res;
      })
  }

  register(registerData: any): Observable<any> {
    return this.http.post('/api/register', {username: registerData.username, password: registerData.password})
      .map((res: Response) => {
        return res;
      })
  }


}
