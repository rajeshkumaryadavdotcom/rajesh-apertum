import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: Array<any>;
  showHint: boolean = true;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getUsers().subscribe((response: Array<any>) => {
      this.users = response;
    });
  }

  filter(): void {
    // Hide hint msg
    this.showHint = false;

    // Filter based on condition
    this.users = this.users.filter(
      (user) =>
        user.age >= 20 &&
        user.age < 30 &&
        [user.firstName, user.lastName].join('').length >= 10
    );
  }
}
