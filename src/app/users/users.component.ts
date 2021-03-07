import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../classes/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  displayedColumns = ['id', 'name', 'verified', 'email', 'phone'];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }
}
