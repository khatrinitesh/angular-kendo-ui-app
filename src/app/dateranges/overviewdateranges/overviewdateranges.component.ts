import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overviewdateranges',
  templateUrl: './overviewdateranges.component.html',
  styleUrls: ['./overviewdateranges.component.scss']
})
export class OverviewdaterangesComponent implements OnInit {

  public min: Date = new Date(1900, 10, 10);
  public max: Date = new Date(2010, 10, 20);

  constructor() { }

  ngOnInit() {
  }

}
