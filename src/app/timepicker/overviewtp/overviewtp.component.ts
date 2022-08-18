import { Component, OnInit } from '@angular/core';

export interface User {
  birthDate: Date;
}


@Component({
  selector: 'app-overviewtp',
  templateUrl: './overviewtp.component.html',
  styleUrls: ['./overviewtp.component.scss']
})
export class OverviewtpComponent implements OnInit {

  public user: User;
  public min1: Date = new Date(2000, 11, 31, 2);
  public max1: Date = new Date(2000, 11, 31, 22);


  public value5: Date = new Date(2000, 2, 10, 13, 30, 0);

  public steps: any = { hour: 2, minute: 15, second: 30, millisecond: 25 };
  public value4: Date = new Date(2000, 2, 10, 10, 30);

  public value3: Date;

  public min: Date = new Date(2000, 2, 10, 2, 30);
  public max: Date = new Date(2002, 2, 10, 22, 15);
  public value2: Date = new Date(2000, 2, 10, 10, 0);

  public value: Date = new Date(2000, 2, 10, 10, 30, 0)

  constructor() { }

  ngOnInit() {
    this.user = {
      birthDate: new Date(2000, 11, 31, 4),
    };
  }

}
