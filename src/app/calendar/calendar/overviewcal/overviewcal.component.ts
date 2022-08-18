import { Component, OnInit } from '@angular/core';
import { Day } from "@progress/kendo-date-math";

@Component({
  selector: 'app-overviewcal',
  templateUrl: './overviewcal.component.html',
  styleUrls: ['./overviewcal.component.scss']
})
export class OverviewcalComponent implements OnInit {

  public disabledDates4: Day[] = [Day.Saturday, Day.Sunday];

  public disableDates3 = (date: Date): boolean => {
    return date.getDate() % 2 === 0;
  }

  public disabledDates1 = (date: Date): boolean => {
    return date.getDate() % 2 === 0
  }

  public focusedDate: Date = new Date(2010, 10, 10)

  public disabledDates: Day[] = [Day.Wednesday];

  public onChange(value: Date[]): void {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
