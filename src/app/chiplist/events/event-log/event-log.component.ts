import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {
  @Input() title: string;
  @Input() events: string[];

  public logEvents(event: string, i: number): string {
    return `${this.events.length - i}. ${event}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
