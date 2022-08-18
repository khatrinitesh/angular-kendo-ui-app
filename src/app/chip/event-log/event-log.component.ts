import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponentChip implements OnInit {

  @Input() title: string;
  @Input() eventsCe: string[];

  public logEventsCe(event: string, i: number): string {
    return `${this.eventsCe.length - i}.${event}`
  }

  constructor() { }

  ngOnInit() {
  }

}
