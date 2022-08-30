import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() selectedItem: string;

  constructor() { }

  ngOnInit() {
  }

}
