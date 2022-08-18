import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icondpb',
  templateUrl: './icondpb.component.html',
  styleUrls: ['./icondpb.component.scss']
})
export class IcondpbComponent implements OnInit {

  public icon = "cog";
  public settings = [
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

  // FontAwesome icon
  public iconClass = "fa fa-cog fa-fw";

  // Image icon
  public imageUrl =
    "https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png";
  public bookmarks = [
    {
      text: "Show All",
    },
    {
      text: "Bookmark This Page",
    },
    {
      text: "Import",
    },
    {
      text: "Export",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
