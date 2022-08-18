import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stylingevent',
  templateUrl: './stylingevent.component.html',
  styleUrls: ['./stylingevent.component.scss']
})
export class StylingeventComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() events: string[];

  ngOnInit() {
  }

}
