import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventsdp',
  templateUrl: './eventsdp.component.html',
  styleUrls: ['./eventsdp.component.scss']
})
export class EventsdpComponent implements OnInit {

  public data = [{ text: "My Profile" }, { text: "Log Out" }];

  public events: string[] = [];

  public onItemClick(): void {
    this.log("item click");
  }

  public onFocus(): void {
    this.log("focus");
  }

  public onBlur(): void {
    this.log("blur");
  }

  public onOpen(): void {
    this.log("open");
  }

  public onClose(): void {
    this.log("close");
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
