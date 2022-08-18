import { Component, OnInit } from '@angular/core';

export interface IData {
  actionName: string;
  icon: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-databinding1',
  templateUrl: './databinding1.component.html',
  styleUrls: ['./databinding1.component.scss']
})
export class Databinding1Component implements OnInit {

  public data2 = [
    {
      actionName: "Undo",
      icon: "undo",
      click: (dataItem: IData): void => {
        console.log(`${dataItem.actionName}ing last action.`);
      },
    },
    {
      actionName: "Redo",
      icon: "redo",
      disabled: true,
    },
    {
      actionName: "Cut",
      icon: "cut",
    },
    {
      actionName: "Copy",
      icon: "copy",
    },
    {
      actionName: "Paste",
      icon: "paste",
    },
  ];

  public data: Array<string> = [
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
