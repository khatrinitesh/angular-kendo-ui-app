import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {

  public items: Array<{ label: string }> = [
    { label: "Ketchup" },
    { label: "Mustard" },
    { label: "Мayonnaise" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
