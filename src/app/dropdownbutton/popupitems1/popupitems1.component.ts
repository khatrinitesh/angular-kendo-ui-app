import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupitems1',
  templateUrl: './popupitems1.component.html',
  styleUrls: ['./popupitems1.component.scss']
})
export class Popupitems1Component implements OnInit {

  public data2 = [
    {
      text: "To PDF",
      icon: "pdfa",
    },
    {
      text: "To Excel",
      icon: "xlsa",
    },
  ];

  public popupClass = "font-arial";

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

  constructor() { }

  ngOnInit() {
  }

}
