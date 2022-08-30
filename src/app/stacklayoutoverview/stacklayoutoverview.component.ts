import { Component, OnInit } from '@angular/core';
import {
  Orientation, HorizontalAlign,
  VerticalAlign,
} from "@progress/kendo-angular-layout";


@Component({
  selector: 'stacklayoutoverview',
  templateUrl: './stacklayoutoverview.component.html',
  styleUrls: ['./stacklayoutoverview.component.scss']
})
export class StacklayoutoverviewComponent implements OnInit {

  public gap = 0;
  public gapChange(e: number): void {
    this.gap = e;
  }

  public orientation: Orientation = "horizontal";

  public lindseyAvatar =
    "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/avatar1.jpg";
  public vincenzoAvatar =
    "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/avatar2.jpg";
  public marissaAvatar =
    "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/avatar3.jpg";

  public lindseyImage =
    "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/dog1.jpg";
  public vincenzoImage =
    "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/summer.jpg";
  public marissaImage =
    "https://demos.telerik.com/blazor-ui-dev/images/stack-layout/dog2.jpg";

  public toggleOrientation(orientation: Orientation): void {
    this.orientation = orientation;
  }

  constructor() { }

  ngOnInit() {
  }

}
