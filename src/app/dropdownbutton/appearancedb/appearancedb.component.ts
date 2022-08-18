import { Component, OnInit } from '@angular/core';
import { ButtonThemeColor } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-appearancedb',
  templateUrl: './appearancedb.component.html',
  styleUrls: ['./appearancedb.component.scss']
})
export class AppearancedbComponent implements OnInit {

  public data4: string[] = [
    "My Profile",
    "Friend Requests",
    "Account Settings",
    "Support",
    "Log Out",
  ];
  public themeColors: ButtonThemeColor[] = [
    "base",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "inverse",
  ];

  public data3: Array<string> = [
    "My Profile",
    "Friend Requests",
    "Account Settings",
    "Support",
    "Log Out",
  ];

  public data2: Array<string> = [
    "My Profile",
    "Friend Requests",
    "Account Settings",
    "Support",
    "Log Out",
  ];

  public data1: Array<string> = [
    "My Profile",
    "Friend Requests",
    "Account Settings",
    "Support",
    "Log Out",
  ];

  constructor() { }

  ngOnInit() {
  }

}
