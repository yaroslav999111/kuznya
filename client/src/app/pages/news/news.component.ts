import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  myAllProjectsByStatus: any;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getMyProjects();
  }

  getMyProjects() {
    this.projectsService.getAllProjectsByStatus((0)).subscribe(data => {
      this.myAllProjectsByStatus = data;
    });
  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

}
