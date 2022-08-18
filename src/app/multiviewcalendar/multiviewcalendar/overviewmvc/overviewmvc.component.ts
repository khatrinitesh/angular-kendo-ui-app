import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overviewmvc',
  templateUrl: './overviewmvc.component.html',
  styleUrls: ['./overviewmvc.component.scss']
})
export class OverviewmvcComponent implements OnInit {

  public value: Date;

  public disabledDates = (date: Date): boolean => {
    return date.getDate() % 2 === 0;
  }

  public range = {
    start: new Date(2018, 10, 10),
    end: new Date(2018, 10, 20)
  }

  constructor() { }

  ngOnInit() {
  }

}
