import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  public imageSrc =
    "https://demos.telerik.com/kendo-ui/content/shared/images/photos/4.jpg";

  public addToQueue(): void {
    console.log("Added to queue!");
  }

  constructor() { }

  ngOnInit() {
  }

}
