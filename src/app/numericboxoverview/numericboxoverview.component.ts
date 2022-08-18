import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { NumberFormatOptions } from "@progress/kendo-angular-intl";


export interface User { }

@Component({
  selector: 'custom_numericboxoverview',
  templateUrl: './numericboxoverview.component.html',
  styleUrls: ['./numericboxoverview.component.scss']
})
export class NumericboxoverviewComponent {
  public percentage = 0.7;


  public form: FormGroup;

  public userData: { amount: number } = {
    amount: 0,
  };

  public formatOptions: NumberFormatOptions = {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "name",
  };

  constructor() {
    this.form = new FormGroup({
      amount: new FormControl(this.userData.amount, [Validators.required]),
    });
  }

  // public userData: { amount: number } = {
  //   amount: 0,
  // };



  // public form: FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     numeric: [20],
  //   });
  //   this.form = new FormGroup({
  //     amount: new FormControl(this.userData.amount, [Validators.required]),
  //   });
  // }

  public step = 5;
  public maxlength = 3;
  public value = 5;
  public format = "n3";
  public decimals = 3;
  // public autoCorrect = false;
  // public value = 5;


}
