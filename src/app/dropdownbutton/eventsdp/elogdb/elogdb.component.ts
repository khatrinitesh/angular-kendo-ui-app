import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-elogdb',
  templateUrl: './elogdb.component.html',
  styleUrls: ['./elogdb.component.scss']
})
export class ElogdbComponent implements OnInit {
  @Input() title: string;
  @Input() events: string[];

  public logEvents(event: string, i: number): string {
    return `${this.events.length - i}. ${event}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
