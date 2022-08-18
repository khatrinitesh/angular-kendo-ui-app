import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom_tickoverview',
  templateUrl: './tickoverview.component.html',
  styleUrls: ['./tickoverview.component.scss']
})
export class TickoverviewComponent implements OnInit {

  public fixedTickWidth = 50;
  public min = 0;
  public max = 10;
  public value: [number, number] = [3, 5];
  public readonly = true;

  // public value: [number, number] = [3, 5]
  // public min = 0
  // public max = 0
  // public step = 1
  // private numbers = [
  //   "N",
  //   "I",
  //   "II",
  //   "III",
  //   "IV",
  //   "V",
  //   "VI",
  //   "VII",
  //   "VIII",
  //   "IX",
  //   "X",
  // ]

  // public title = (value: number): string => {
  //   return this.numbers[value]
  // }

  // public tickPlacement = "after";
  // public listItems = ["before", "after", "both", "none"];
  // public value: [number, number] = [3, 5];
  // public min = 0;
  // public max = 10;


  constructor() { }

  ngOnInit() {
  }

}
