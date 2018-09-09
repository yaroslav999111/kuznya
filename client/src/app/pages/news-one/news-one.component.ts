import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.component.html',
  styleUrls: ['./news-one.component.scss']
})
export class NewsOneComponent implements OnInit {
  currentProject: any;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getCurrentProject();
  }

  getCurrentProject() {
   this.projectsService.moreProject.subscribe(data => {
     this.currentProject = data;
     console.log( this.currentProject );
   });
  }

}
