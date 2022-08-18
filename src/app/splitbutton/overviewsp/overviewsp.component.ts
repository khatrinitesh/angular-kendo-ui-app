import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overviewsp',
  templateUrl: './overviewsp.component.html',
  styleUrls: ['./overviewsp.component.scss']
})
export class OverviewspComponent implements OnInit {

  // start data binding
  public data2: Array<string> = ["Save as", "Upload to drive"];

  public onButtonClick2(): void {
    console.log("Save");
  }

  public onItemClick2(dataItem: string): void {
    console.log(dataItem);
  }
  // end data binding

  public data1 = [
    {
      text: "Keep Text Only",
      icon: "paste-plain-text",
      click: (): void => {
        console.log("Keep Text Only");
      },
    },
    {
      text: "Paste as HTML",
      icon: "paste-as-html",
      click: (): void => {
        console.log("Paste as HTML");
      },
    },
    {
      text: "Paste Markdown",
      icon: "paste-markdown",
      click: (): void => {
        console.log("Paste Markdown");
      },
    },
    {
      text: "Set Default Paste",
      click: (): void => {
        console.log("Set Default Paste");
      },
    },
  ];

  public onPaste(): void {
    console.log("Paste");
  }

  constructor() { }

  ngOnInit() {
  }

}
