import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'customtextboxoverview',
  templateUrl: './textboxoverview.component.html',
  styleUrls: ['./textboxoverview.component.scss']
})
export class TextboxoverviewComponent implements OnInit {

  // start setting the width
  public maskedValue: string;
  public sliderValue = 5;
  public numericValue = 5;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  // end setting the width

  // start readonly
  public readOnlyValue = "Read-Only TextBox";
  public normalValue = "Editable TextBox";
  // end readonly

  // start isDisabled
  public isDisabled = true
  // end isDisabled

  // start reactive forms
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      surname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  public get showSuccess(): boolean {
    if (this.form.controls) {
      const formControl = this.form.controls.name;
      return formControl.value && formControl.value.length > 3;
    }
  }
  // end reactive forms


  // start template driven forms
  public valuetwo = "";
  // end template driven forms

  // start character count
  public maxlength = 10;
  public charachtersCount = 0;
  public counter = `${this.charachtersCount}/${this.maxlength}`;
  public onValueChange(ev: string): void {
    this.charachtersCount = ev.length;
    this.counter = `${this.charachtersCount}/${this.maxlength}`;
  }
  // end character count

  ngOnInit() {
  }

}
