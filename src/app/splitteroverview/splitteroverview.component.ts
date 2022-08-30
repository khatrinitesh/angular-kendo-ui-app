import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splitteroverview',
  templateUrl: './splitteroverview.component.html',
  styleUrls: ['./splitteroverview.component.scss']
})
export class SplitteroverviewComponent implements OnInit {

  private _sidebarSize: string = localStorage.getItem("sidebarSize") || "20%";
  public get sidebarSize(): string {
    return this._sidebarSize;
  }
  public set sidebarSize(newSize: string) {
    this._sidebarSize = newSize;
    localStorage.setItem("sidebarSize", newSize);
  }

  constructor() { }

  ngOnInit() {
  }

}
