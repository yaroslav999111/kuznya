import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ProjectsService implements OnInit {
  mainUrl: string = 'http://35.232.84.79:3333/';

  moreProject = new BehaviorSubject({});

  constructor(public http: HttpClient) {
  }

  ngOnInit() {

  }

  getMyProjects(mail: any) {
    return this.http.post(this.mainUrl + 'projects/getMyProjects', {email: mail})
      .map((res: Response) => {
        return res;
      });
  }

  deleteCurrentProject(id: any) {
    return this.http.post(this.mainUrl + 'projects/deleteProject', {id: id})
      .map((res: Response) => {
        return res;
      });
  }

  getAllProjectsByStatus(status: any) {
    return this.http.post(this.mainUrl + 'projects/getProjectsByStatus', {status: status})
      .map((res: Response) => {
        return res;
      });
  }



}
