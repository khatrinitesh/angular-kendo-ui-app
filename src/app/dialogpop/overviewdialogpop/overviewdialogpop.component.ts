import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overviewdialogpop',
  templateUrl: './overviewdialogpop.component.html',
  styleUrls: ['./overviewdialogpop.component.scss']
})
export class OverviewdialogpopComponent implements OnInit {

  public opened2 = true;

  public close2(): void {
    this.opened2 = false;
  }

  public open2(): void {
    this.opened2 = true;
  }

  public dialogOpened = false;
  public windowOpened = false;

  public close(component: string): void {
    this[component + "Opened"] = false;
  }

  public open(component: string): void {
    this[component + "Opened"] = true;
  }

  public action(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
