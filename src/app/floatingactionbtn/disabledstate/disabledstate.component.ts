import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabledstate',
  templateUrl: './disabledstate.component.html',
  styleUrls: ['./disabledstate.component.scss']
})
export class DisabledstateComponent implements OnInit {

  public disabled = true;

  public toggleDisabled(): void {
    this.disabled = !this.disabled
  }



  constructor() { }

  ngOnInit() {
  }

}
