import { Component, OnInit, Input } from '@angular/core';
import { MyCardComponent } from '../cardoverview.component';

@Component({
  selector: 'scrollview-card',
  templateUrl: './scrollview-card.component.html',
  styleUrls: ['./scrollview-card.component.scss']
})
export class ScrollviewCardComponent implements OnInit {

  @Input() public card: MyCardComponent;

  constructor() { }

  ngOnInit() {
  }

}
