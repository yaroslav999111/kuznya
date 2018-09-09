import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ProjectsService} from "../../services/projects.service";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

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
  selectedFile: File;
  files: any;
  files2: any;
  filestring: any;
  filestring2: any;

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

  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
  }

  getFiles2(event) {
    this.files2 = event.target.files;
    var reader2 = new FileReader();
    reader2.onload = this._handleReaderLoaded2.bind(this);
    reader2.readAsBinaryString(this.files2[0]);
  }

  _handleReaderLoaded2(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring2 = btoa(binaryString);  // Converting binary string data.
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
      status: this.category.status,
      avatar: this.filestring2
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
      freeOrBusy: this.busy.status,
      avatar: this.filestring
    };
    this.loginService.updateUser(updateUserData).subscribe(data => {
     this.loginService.currentUserInformation.next(data);
      this.profileInformation = this.loginService.currentUserInformation.value;
      console.log(this.profileInformation);
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
