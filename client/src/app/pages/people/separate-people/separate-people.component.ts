import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {ProjectsService} from "../../../../services/projects.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-separate-people',
  templateUrl: './separate-people.component.html',
  styleUrls: ['./separate-people.component.scss']
})
export class SeparatePeopleComponent implements OnInit {
  userDetails: any;
  currentProjects: any;
  position: any = { status: 1};
  constructor(public userService: UsersService, public projectsService: ProjectsService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  profileForm = new FormGroup({
    position: new FormControl(''),
  });

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

  goMore(data: any) {
    this.projectsService.moreProject.next(data);
  }

  onSubmit() {
    console.log(this.position);
  }

}
