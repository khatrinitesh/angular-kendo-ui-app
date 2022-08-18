import { Component, OnInit } from '@angular/core';
import { GradientSettings } from "@progress/kendo-angular-inputs";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ActiveColorClickEvent } from "@progress/kendo-angular-inputs";

@Component({
  selector: 'custom_flatcolorpickeroverview',
  templateUrl: './flatcolorpickeroverview.component.html',
  styleUrls: ['./flatcolorpickeroverview.component.scss']
})
export class FlatcolorpickeroverviewComponent implements OnInit {

  public events: string[] = [];

  public onOpen(): void {
    this.log("ColorPicker is opened");
  }

  public onClose(): void {
    this.log("ColorPicker is closed");
  }

  public onFocus(): void {
    this.log("ColorPicker is focused");
  }

  public onBlur(): void {
    this.log("ColorPicker is blurred");
  }

  public onChange(color: string): void {
    this.log(`valueChange ${color}`);
  }

  public onActiveColorClick(event: ActiveColorClickEvent): void {
    this.log(`activeColorClick ${event.color}`);
  }

  public onActiveViewChange(event: string): void {
    this.log(`activeViewChange ${event}`);
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }

  // public form: FormGroup;
  // public color: FormControl;
  // constructor(formBuilder: FormBuilder) {
  //   this.color = formBuilder.control("", [Validators.required]);
  //   this.form = formBuilder.group({
  //     color: this.color,
  //   });
  // }

  // TEMPLATE DRIVEN FORMS
  // public color: string;

  // READONLY
  // public isReadonly = true;

  // DISABLED
  // public isDisabled = true;

  // COLOR CONTRAST TOOL
  // public selected2 = "#3d3df8";
  // public settings: GradientSettings = {
  //   contrastTool: "#ffffff",
  // };
  // public onChange2(newValue: string): void {
  //   this.selected = newValue;
  // }

  // COLOR PREVIEW
  // public selected = "#fe413b";
  // public preview = true;
  // public onChange(color: string): void {
  //   this.selected = color;
  // }

  // OVERVIEW
  // public value = "FE6757";

  // constructor() { }

  ngOnInit() {
  }

}
