import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-own-profile',
  templateUrl: './own-profile.component.html',
  styleUrls: ['./own-profile.component.scss']
})
export class OwnProfileComponent implements OnInit {
  profileInformation: any;
  busy: any = { status: 0 };
  category: any = { status: 0};
  myProjects: any;

  profileForm = new FormGroup({
    mobile: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    sname: new FormControl(''),
    email: new FormControl(''),
    site: new FormControl(''),
    position: new FormControl(''),
    about: new FormControl(''),
    freeOrBusy: new FormControl(''),
  });

  projectForm = new FormGroup({
    title: new FormControl(''),
    story: new FormControl(''),
    category: new FormControl(''),
    status:  new FormControl('')
  });

  constructor(public loginService: LoginService, public projectsService: ProjectsService) { }

  ngOnInit() {
   this.profileInformation = this.loginService.currentUserInformation.value;
   this.getMyProjects();
  }

  getMyProjects() {
    this.projectsService.getMyProjects(this.profileInformation).subscribe(data => {
      this.myProjects = data;
    });
  }

  deleteProject(id: any) {
    this.projectsService.deleteCurrentProject(id).subscribe(data => {
      this.getMyProjects();
    });
  }


  saveProject() {
    const project = {
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
      title: this.projectForm.value.title,
      story: this.projectForm.value.story,
      category: this.projectForm.value.category,
      status: this.category.status
    };


    this.loginService.addProject(project).subscribe(data => {
      this.getMyProjects();
    });


  }

  onSubmit() {
    const updateUserData = {
      mobile: this.profileForm.value.mobile,
      password: this.profileForm.value. password,
      username: this.profileForm.value.username,
      sname: this.profileForm.value.sname,
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
      site: this.profileForm.value.site,
      position: this.profileForm.value.position,
      about: this.profileForm.value.about,
      freeOrBusy: this.busy.status
    };
    this.loginService.updateUser(updateUserData).subscribe(data => {
     this.loginService.currentUserInformation.next(data);
      this.profileInformation = this.loginService.currentUserInformation.value;
    });

    if (this.profileForm.value.email) {
      this.updateUserEmailForCategories();
    }

  }


  updateUserEmailForCategories() {
    const updateUserData = {
      email: this.profileInformation['email'],
      newEmail: this.profileForm.value.email,
    };

    this.loginService.updatePostUserEmailForCategories(updateUserData).subscribe(data => {
    });

  }

}
