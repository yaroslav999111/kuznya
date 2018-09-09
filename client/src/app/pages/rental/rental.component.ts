import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  myAllProjectsByStatus: any;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getMyProjects();
  }

  getMyProjects() {
    this.projectsService.getAllProjectsByStatus((3)).subscribe(data => {
      this.myAllProjectsByStatus = data;
    });
  }

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

}
