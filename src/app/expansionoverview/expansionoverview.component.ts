import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { ExpansionPanelComponent } from "@progress/kendo-angular-layout";
import { countries } from './countries/countries.component';

@Component({
  selector: 'expansionoverview',
  templateUrl: './expansionoverview.component.html',
  styleUrls: ['./expansionoverview.component.scss']
})
export class ExpansionoverviewComponent implements OnInit {
  public duration = 500;

  @ViewChild("panel", { static: false }) public panel: ExpansionPanelComponent;

  public toggleContent(): void {
    this.panel.toggle();
  }

  public expandedState = true;
  public expandCollapseContent(): void {
    this.expandedState = !this.expandedState;
  }


  @ViewChildren(ExpansionPanelComponent)
  panels: QueryList<ExpansionPanelComponent>;

  public items = countries;

  public onAction(index: number): void {
    this.panels.forEach((panel, idx) => {
      if (idx !== index && panel.expanded) {
        panel.toggle();
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
