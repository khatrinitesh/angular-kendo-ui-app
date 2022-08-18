import { Component, OnInit } from '@angular/core';
import { FabPositionMode, FabAlign, FabOffset, DialItem } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.scss']
})

export class PositioningComponent implements OnInit {

  public dialOpen = false;

  public socialItems3: Array<DialItem> = [
    { icon: "facebook" },
    { icon: "twitter" },
    { icon: "pinterest" },
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

  public enabled = true;
  public duration = 180;
  public gap = 90;

  public socialItems2: Array<DialItem> = [
    { icon: "vimeo", label: "Vimeo" },
    { icon: "youtube", label: "Youtube" },
    { icon: "yammer", label: "Yammer" },
  ];

  public socialItems: Array<DialItem> = [
    { icon: "linkedin", disabled: true },
    { icon: "twitter" },
    { icon: "pinterest" },
  ];

  public actionItems: Array<DialItem> = [
    { icon: "email", label: "Email" },
    { icon: "calendar", label: "Event" },
    { icon: "file-txt", label: "Note" },
  ];

  public labelItems: Array<DialItem> = [
    { label: "Add" },
    { label: "Edit" },
    { label: "Save" },
  ];

  public xValue = 16;
  public yValue = 16;
  public offset: FabOffset = { x: `${this.xValue}px`, y: `${this.yValue}px` };

  public onXChange(value: number): void {
    this.xValue = value;
    this.offset = { x: `${value}px`, y: this.offset.y };
  }

  public onYChange(value: number): void {
    this.yValue = value;
    this.offset = { x: this.offset.x, y: `${value}px` };
  }

  public topStart: FabAlign = { vertical: "top", horizontal: "start" };
  public topCenter: FabAlign = { vertical: "top", horizontal: "center" };
  public topEnd: FabAlign = { vertical: "top", horizontal: "end" };

  public middleStart: FabAlign = { vertical: "middle", horizontal: "start" };
  public middleEnd: FabAlign = { vertical: "middle", horizontal: "end" };

  public bottomStart: FabAlign = { vertical: "bottom", horizontal: "start" };
  public bottomCenter: FabAlign = { vertical: "bottom", horizontal: "center" };
  public bottomEnd: FabAlign = { vertical: "bottom", horizontal: "end" };

  public positionMode: FabPositionMode = "fixed";

  public scrollToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
