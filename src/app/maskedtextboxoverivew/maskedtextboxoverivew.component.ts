import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'custommaskedtextboxoverivew',
  templateUrl: './maskedtextboxoverivew.component.html',
  styleUrls: ['./maskedtextboxoverivew.component.scss']
})
export class MaskedtextboxoverivewComponent implements OnInit {
  public includeLiterals = false;
  public value = "5748157000194334";
  public mask = "0000-0000-0000-0000";
  public disabled = true;
  public readonly = true;

  // public phoneNumberValue = "";
  // public phoneNumberMask = "(+91) 000-00-00-00";

  // public form: FormGroup;

  // public userData: { phoneNumber: string } = {
  //   phoneNumber: this.phoneNumberValue,
  // };

  // constructor() {
  //   this.form = new FormGroup({
  //     phoneNumber: new FormControl(this.userData.phoneNumber, [
  //       Validators.required,
  //     ]),
  //   });
  // }


  // public value;

  // public value = "M1 1AE";
  // public mask = "A9 9AA";
  // public maskValidation = true;

  // public value = "359884123321";
  // public mask = "(999) 000-00-00-00";

  ngOnInit() {
  }

}
