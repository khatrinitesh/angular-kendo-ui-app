import { Component, OnInit } from '@angular/core';
import {
  TextAreaFlow, InputSize,
  InputRounded,
  InputFillMode,
} from "@progress/kendo-angular-inputs";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'custom_customtextarea',
  templateUrl: './customtextarea.component.html',
  styleUrls: ['./customtextarea.component.scss']
})
export class CustomtextareaComponent implements OnInit {

  // start readonly
  public readOnlyValueExample = "Read-Only TextArea Example";
  public normalValue = "Editable TextArea";
  // end readonly

  public size: InputSize = "medium";
  public rounded: InputRounded = "medium";
  public fillMode: InputFillMode = "solid";

  public options = [
    {
      type: "size",
      data: ["small", "medium", "large"],
      default: this.size,
    },
    {
      type: "rounded",
      data: ["small", "medium", "large", "full"],
      default: this.rounded,
    },
    {
      type: "fillMode",
      data: ["flat", "solid", "outline"],
      default: this.fillMode,
    },
  ];

  public changeHandler(ev: { optionType: string; optionValue: string }): void {
    this[ev.optionType] = ev.optionValue;
  }

  // start reactive forms
  public reactiveForm: FormGroup;
  // end reactive forms

  // start template-driven forms
  public comment = ""
  // end template-driven forms

  // start textarea sizing
  public textAreaWithRowsValue = "Initial rows 5";
  public textAreaWithColsValue = "Initial cols 50";
  // end textarea sizing

  // start disabled adornments
  public disabled = true;
  // end disabled adornments

  // start flow direction
  public flow: TextAreaFlow = "horizontal";
  // end flow direction

  // start adornments
  public value2 = "";
  public clearValue2(): void {
    this.value = "";
  }
  // end adornments

  // start character counter
  public value = "Dear friend,";
  public maxlength = 200
  public charachtersCount: number;
  public counter: string;

  public ngOnInit(): void {
    this.charachtersCount = this.value ? this.value.length : 0;
    this.counter = `${this.charachtersCount}/${this.maxlength}`;
  }
  public onValueChange(ev: string): void {
    this.charachtersCount = ev.length
    this.counter = `${this.charachtersCount}/${this.maxlength}`
  }
  // end character counter


  public firstContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg";
  public secondContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg";

  public textAreaValue =
    "Hi James, thanks for contacting our support team. Please, use our ticket system with the specific problem you have and we will get back to you with a solution.";

  public clearValue(): void {
    this.textAreaValue = "";
  }

  constructor() {
    this.reactiveForm = new FormGroup({
      comment: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }


}
