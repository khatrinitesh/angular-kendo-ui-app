import { Component, OnInit } from '@angular/core';
import {
  ArcGaugeComponent,
  CircularGaugeComponent,
  LinearGaugeComponent,
  RadialGaugeComponent,
} from "@progress/kendo-angular-gauges";
import { saveAs } from "@progress/kendo-file-saver";

@Component({
  selector: 'app-overviewgauges',
  templateUrl: './overviewgauges.component.html',
  styleUrls: ['./overviewgauges.component.scss']
})
export class OverviewgaugesComponent implements OnInit {

  public exportGauge(
    component:
      | RadialGaugeComponent
      | LinearGaugeComponent
      | CircularGaugeComponent
      | ArcGaugeComponent
  ): void {
    component.exportImage().then((dataURI: string) => {
      saveAs(dataURI, "gauge.png");
    });
  }

  // public showLabels = true;
  // public showTicks = true;
  // public reverse = false;
  // public autoCorrect = true;
  // public value = 30;
  // public listItems: Array<string> = ["round", "butt"];

  // public startAngle = 0;
  // public endAngle = 180;
  // public rangeSize = 12;

  // public rangePlaceholderColor = "rgba(228, 228, 228, 1)";
  // public ticksColor = "rgba(0, 128,0, 1)";
  // public labelsColor = "rgba(0, 0, 255, 1)";

  // public showLabels = true;
  // public showTicks = true;
  // public reverse = false;
  // public vertical = true;
  // public autoCorrect = true;
  // public lineWidth: number;
  // public value = 30;
  // public listItems: Array<string> = ["round", "butt"];

  // public rangeSize = 12;

  // public lineColor = "rgba(107, 107, 111, 1)";
  // public rangeColor = "rgba(186, 186, 191, 1)";
  // public rangePlaceholderColor = "rgba(228, 228, 228, 1)";
  // public ticksColor = "rgba(0, 128,0, 1)";
  // public labelsColor = "rgba(0, 0, 255, 1)";

  // public pointers = [
  //   {
  //     value: 10,
  //     color: "red",
  //     length: 0.5,
  //   },
  //   {
  //     value: 20,
  //     color: "blue",
  //     length: 0.75,
  //   },
  //   {
  //     value: 30,
  //     color: "green",

  //     // Default length
  //     // length: 1
  //   },
  // ]
  // public showLabels = true;
  // public showTicks = true;
  // public reverse = false;
  // public autoCorrect = true;
  // public value = 30;
  // public listItems: Array<string> = ["round", "butt"];

  // public startAngle = 0;
  // public endAngle = 180;
  // public rangeSize = 12;

  // public rangeLineCap: LineCap = "round";

  // public rangePlaceholderColor = "rgba(228, 228, 228, 1)";
  // public ticksColor = "rgba(0, 128,0, 1)";
  // public labelsColor = "rgba(0, 0, 255, 1)";

  // public value = 10;
  // public colors = [
  //   {
  //     to: 25,
  //     color: "#0058e9",
  //   },
  //   {
  //     from: 25,
  //     to: 50,
  //     color: "#37b400",
  //   },
  //   {
  //     from: 50,
  //     to: 75,
  //     color: "#ffc000",
  //   },
  //   {
  //     from: 75,
  //     color: "#f31700",
  //   },
  // ];

  constructor() { }

  ngOnInit() {
  }

}
