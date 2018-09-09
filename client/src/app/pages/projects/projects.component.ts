import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  myAllProjectsByStatus: any;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getMyProjects();
  }

  getMyProjects() {
    this.projectsService.getAllProjectsByStatus((1)).subscribe(data => {
      this.myAllProjectsByStatus = data;
    });
  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }




}
