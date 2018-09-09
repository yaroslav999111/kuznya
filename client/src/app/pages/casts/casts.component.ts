import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  myAllProjectsByStatus: any;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getMyProjects();
  }

  getMyProjects() {
    this.projectsService.getAllProjectsByStatus((2)).subscribe(data => {
      this.myAllProjectsByStatus = data;
    });
  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

}
