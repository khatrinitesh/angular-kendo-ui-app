import { Component, OnInit } from '@angular/core';
import { StepperActivateEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-stepperoverview',
  templateUrl: './stepperoverview.component.html',
  styleUrls: ['./stepperoverview.component.scss']
})
export class StepperoverviewComponent implements OnInit {
  // START EVENT
  public onStepActivate(ev: StepperActivateEvent): void {
    if (ev.index === this.steps.length - 1) {
      ev.preventDefault();

      alert("Please fill previous steps");
    }

    console.log(`Step ${ev.index} was activated`);
  }
  // END EVENT


  // start stepper example 1
  public current = 2;
  public steps = [
    { label: "Personal Info", icon: "user" },
    { label: "Education", icon: "dictionary-add" },
    { label: "Attachments", icon: "attachment", optional: true },
    { label: "Preview", icon: "preview" },
    { label: "Submit", icon: "file-add" },
  ];
  // end stepper example 2

  constructor() { }

  ngOnInit() {
  }

}
