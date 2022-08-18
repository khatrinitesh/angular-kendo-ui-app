import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectionmode',
  templateUrl: './selectionmode.component.html',
  styleUrls: ['./selectionmode.component.scss']
})
export class SelectionmodeComponent implements OnInit {

  public chips = [
    {
      label: "Apple",
      selected: true,
    },
    {
      label: "Strawberry",
      selected: false,
    },
    {
      label: "Banana",
      selected: false,
    },
    {
      label: "Kiwi",
      selected: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
