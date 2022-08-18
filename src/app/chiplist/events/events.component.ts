import { Component, OnInit } from '@angular/core';
import { ChipListRemoveEvent } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events: string[] = [];

  public chips = [
    {
      label: "Apple",
      icon: "marker-pin-target",
      removable: true,
    },
    {
      label: "Strawberry",
      icon: "marker-pin-target",
      removable: true,
    },
    {
      label: "Banana",
      icon: "marker-pin-target",
      removable: true,
    },
    {
      label: "Kiwi",
      icon: "marker-pin-target",
      removable: true,
    },
  ];

  public onRemove(e: ChipListRemoveEvent): void {
    this.log(`remove, ${e.removedChip.label}`);
  }

  public selectedChange(e: number[]): void {
    this.log(`selectedChange, selected indices: ${e}`);
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
