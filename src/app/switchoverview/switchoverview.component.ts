import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'custom_switchoverview',
  templateUrl: './switchoverview.component.html',
  styleUrls: ['./switchoverview.component.scss']
})
export class SwitchoverviewComponent implements OnInit {

  public form: FormGroup;

  public userData: { [Key: string]: boolean } = {
    notifications: true,
  };

  public disabled = false
  public readonly = true
  constructor() {
    this.form = new FormGroup({
      notifications: new FormControl(this.userData.notifications, [
        Validators.requiredTrue,
      ]),
    });
  }

  // public form = new FormGroup({
  //   switch: new FormControl(null, Validators.required)
  // })

  // public value = true;
  // public checked = true;

  ngOnInit() {
  }

}
