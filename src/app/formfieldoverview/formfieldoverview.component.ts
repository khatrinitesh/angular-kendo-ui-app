import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'custom_formfieldoverview',
  templateUrl: './formfieldoverview.component.html',
  styleUrls: ['./formfieldoverview.component.scss']
})
export class FormfieldoverviewComponent implements OnInit {

  public name = "John Doe";
  public birthDate: Date;
  public min = new Date(1917, 0, 1);
  public max = new Date(2020, 4, 31);

  // public userForm: FormGroup = new FormGroup({
  //   userName: new FormControl(),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  // });

  // public userForm: FormGroup = new FormGroup({
  //   userName: new FormControl(),
  // });

  // public min: Date = new Date(1917, 0, 1);
  // public max: Date = new Date(2020, 4, 31);

  // public registerForm: FormGroup = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   birthDate: new FormControl(new Date(2000, 10, 10)),
  //   email: new FormControl("", Validators.email),
  //   acceptNews: new FormControl(),
  // });

  // public submitForm(): void {
  //   this.registerForm.markAllAsTouched();
  // }

  // public clearForm(): void {
  //   this.registerForm.reset();
  // }

  constructor() { }

  ngOnInit() {
  }

}
