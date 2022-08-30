import { Component, OnInit } from '@angular/core';
import { HorizontalAlign, VerticalAlign } from "@progress/kendo-angular-layout";

@Component({
  selector: 'gridlayoutoverivew',
  templateUrl: './gridlayoutoverivew.component.html',
  styleUrls: ['./gridlayoutoverivew.component.scss']
})
export class GridlayoutoverivewComponent implements OnInit {


  public items = [...Array(15)];
  public hAlign: HorizontalAlign = "stretch";
  public vAlign: VerticalAlign = "stretch";
  public hAlignOptions = ["start", "center", "end", "stretch"];
  public vAlignOptions = ["top", "middle", "bottom", "stretch"];

  public hAlignChange(e: HorizontalAlign): void {
    this.hAlign = e;
  }

  public vAlignChange(e: VerticalAlign): void {
    this.vAlign = e;
  }
  constructor() { }

  ngOnInit() {
  }

}
