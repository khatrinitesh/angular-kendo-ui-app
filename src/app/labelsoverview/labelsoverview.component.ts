import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customlabelsoverview',
  templateUrl: './labelsoverview.component.html',
  styleUrls: ['./labelsoverview.component.scss']
})
export class LabelsoverviewComponent implements OnInit {

  public age2: number;
  public maskedText: string;
  public mask = "(999) 000-00-00-00";

  public date = Date;
  public data: string[] = ['foo', 'bar', 'baz']
  public comboBoxValue: string;
  public age: number;

  constructor() { }

  ngOnInit() {
  }

}
