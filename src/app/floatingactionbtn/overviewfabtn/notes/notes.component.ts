import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  public dialOpen = false;

  public text =
    'I renamed my iPod The Titanic, so when I plug in it, it says "The Titanic is syncing."';

  public contacts = [
    {
      name: "Mallory Gillian",
      image:
        "https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/7.png",
    },
    {
      name: "Mia Coldwell",
      image:
        "https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/4.png",
    },
    {
      name: "Darrel Solis",
      image:
        "https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/1.png",
    },
  ];

  public get icon(): string {
    return this.dialOpen ? "close" : "share";
  }

  public onDialOpen(): void {
    this.dialOpen = true;
  }

  public onDialClose(): void {
    this.dialOpen = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
