import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overviewdi',
  templateUrl: './overviewdi.component.html',
  styleUrls: ['./overviewdi.component.scss']
})
export class OverviewdiComponent implements OnInit {

  public value: Date = new Date()

  public range = { start: null, end: null }

  constructor() { }

  ngOnInit() {
  }

}
