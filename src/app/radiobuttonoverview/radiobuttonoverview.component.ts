import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'custom_radiobuttonoverview',
  templateUrl: './radiobuttonoverview.component.html',
  styleUrls: ['./radiobuttonoverview.component.scss']
})
export class RadiobuttonoverviewComponent implements OnInit {

  public form: FormGroup;

  public data: { [Key: string]: string } = {
    confirmation: null,
    gender: null,
  };

  constructor() {
    this.form = new FormGroup({
      confirmation: new FormControl(this.data.confirmation, [
        Validators.required,
      ]),
      gender: new FormControl(this.data.gender, [Validators.required]),
    });
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
  }

  // public model = {
  //   gender: null,
  // }



  ngOnInit() {
  }

}
