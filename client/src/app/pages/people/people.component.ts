import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['people.component.scss']
})
export class PeopleComponent implements OnInit {
  users: any = [];
  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  goUser(user: any) {
    this.userService.userDetails.next(user);
  }
}
