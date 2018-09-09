import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  myAllProjectsByStatus: any;
  myAllProjectsByStatus2: any;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getMyProjects();

  }

  getMyProjects() {
    this.projectsService.getAllProjectsByStatus((1)).subscribe(data => {
      this.myAllProjectsByStatus = data;
    });

    this.projectsService.getAllProjectsByStatus((0)).subscribe(data => {
      this.myAllProjectsByStatus2 = data;
    });
  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

}
