import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {ProjectsService} from "../../../../services/projects.service";

@Component({
  selector: 'app-separate-people',
  templateUrl: './separate-people.component.html',
  styleUrls: ['./separate-people.component.scss']
})
export class SeparatePeopleComponent implements OnInit {
  userDetails: any;
  currentProjects: any;
  constructor(public userService: UsersService, public projectsService: ProjectsService) { }

  ngOnInit() {

    this.getCurrentUser();

  }

  getCurrentUser() {
    this.userService.userDetails.subscribe(data => {
      this.userDetails = data;
      this.getProjectsByEmail();
    });
  }

  getProjectsByEmail() {
      const userDetails = this.userDetails;
      console.log(userDetails);
      this.projectsService.getMyProjects(userDetails).subscribe(data => {
        this.currentProjects = data;
        console.log(this.currentProjects);
      });

  }

}
