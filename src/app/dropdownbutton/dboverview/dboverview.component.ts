import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dboverview',
  templateUrl: './dboverview.component.html',
  styleUrls: ['./dboverview.component.scss']
})
export class DboverviewComponent implements OnInit {

  data = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
