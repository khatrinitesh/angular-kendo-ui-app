import { Component, OnInit } from '@angular/core';
import { DrawerItem, DrawerSelectEvent, DrawerMode, DrawerPosition } from "@progress/kendo-angular-layout";
import { Routes, Route, Router } from "@angular/router";

type CustomRoute = Route & {
  text: string;
};

@Component({
  selector: 'customdraweroverview',
  templateUrl: './draweroverview.component.html',
  styleUrls: ['./draweroverview.component.scss']
})
export class DraweroverviewComponent implements OnInit {

  public expanded = false;

  public items2: Array<{ [Key: string]: unknown }> = [];

  constructor(router: Router) {
    const routes: Routes = router.config;

    routes.forEach((route) => {
      this.items2.push({
        text: (route as CustomRoute).text,
        path: route.path ? route.path : "",
      });
    });

    this.items[0].selected = true;
  }



  public selected2: { [Key: string]: unknown } = {
    title: "Paris",
    description: "Capital of France",
    iconFlag: "france-flag",
    temp: 21,
    iconClass: "sunny",
    selected: true,
  };

  public items = [
    {
      title: "Paris",
      description: "Capital of France",
      iconFlag: "france-flag",
      temp: 21,
      iconClass: "sunny",
      selected: true,
    },
    { separator: true },
    {
      title: "Rome",
      description: "Capital of Italy",
      iconFlag: "italy-flag",
      temp: 30,
      iconClass: "sunny",
    },
    { separator: true },
    {
      title: "Berlin",
      description: "Capital of Germany",
      iconFlag: "germany-flag",
      temp: 18,
      iconClass: "cloudy",
    },
    { separator: true },
    {
      title: "Madrid",
      description: "Capital of Spain",
      iconFlag: "spain-flag",
      temp: 31,
      iconClass: "sunny",
    },
  ];

  public onSelect2(ev: DrawerSelectEvent): void {
    this.selected2 = ev.item;
  }


  // public onPositionChange(checked: boolean): void {
  //   this.position = checked ? "start" : "end";
  // }

  // public position: DrawerPosition = "start";

  // public expandMode: DrawerMode = "overlay";
  // public onExpandModeChange(checked: boolean): void {
  //   this.expandMode = checked ? "overlay" : "push";
  // }

  // public expanded = true;

  // public switchExpanded(): void {
  //   this.expanded = !this.expanded;
  // }

  // public selected = "Inbox";

  // public item: Array<DrawerItem> = [
  //   { text: "Inbox", icon: "k-i-inbox", selected: true },
  //   { separator: true },
  //   { text: "Notifications", icon: "k-i-bell" },
  //   { text: "Calendar", icon: "k-i-calendar" },
  //   { separator: true },
  //   { text: "Attachments", icon: "k-i-hyperlink-email" },
  //   { text: "Favourites", icon: "k-i-star-outline" },
  // ]

  // public onSelect(ev: DrawerSelectEvent): void {
  //   this.selected = ev.item.text;
  // }



  ngOnInit() {
  }

}
