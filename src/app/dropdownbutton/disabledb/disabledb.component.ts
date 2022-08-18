import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabledb',
  templateUrl: './disabledb.component.html',
  styleUrls: ['./disabledb.component.scss']
})
export class DisabledbComponent implements OnInit {

  public disabled = true;
  public data = [
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

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
