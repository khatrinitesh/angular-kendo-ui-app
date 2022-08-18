import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor,
} from "@progress/kendo-angular-buttons";
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { NotificationService } from "@progress/kendo-angular-notification";
import { IOption } from "./models";


export interface IDay {
  text: string;
  index: number;
}

export type Option = {
  type: string;
  data: string[];
  default: ButtonSize | ButtonRounded | ButtonFillMode | ButtonThemeColor;
};
export interface IButton {
  text: string;
  icon: string;
  color: string;
  selected?: boolean;
}

@Component({
  selector: 'custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.scss']
})
export class CustombuttonComponent implements OnInit {

  public events: string[] = [];

  public onNavigate(e: { [key: string]: boolean }): void {
    this.log("navigate");
    console.log(e);
  }

  public onCClick(button: string): void {
    this.log(`${button} button clicked`);
  }

  public log1(event: string): void {
    this.events.unshift(`${event}`);
  }

  @ViewChild('contactslist', { static: false }) public list: AutoCompleteComponent
  public container: ViewContainerRef;
  public weeks = [
    { text: "Monday", index: 0 },
    { text: "Tuesday", index: 1 },
    { text: "Wednesday", index: 2 },
    { text: "Thursday", index: 3 },
    { text: "Friday", index: 4 },
    { text: "Saturday", index: 5 },
    { text: "Sunday", index: 6 },
  ];

  public selectedDays = [];

  constructor(private notificationService: NotificationService) { }

  // public weeksselectedChange(isTrue: boolean, day: IDay): void {
  //   if (isTrue) {
  //     this.selectedDays.push(day.index);
  //   } else {
  //     const index = this.selectedDays.indexOf(day.index);
  //     this.selectedDays.splice(index, 1);
  //   }
  //   this.selectedDays.sort((a, b) => a - b);
  //   this.show(isTrue, day);
  // }

  // public show(isChecked: boolean, day: IDay): void {
  //   if (isChecked) {
  //     this.showNotification2(isChecked, day);
  //   } else {
  //     this.showNotification2(isChecked, day);
  //   }
  // }

  // Show notification
  // public showNotification2(checked: boolean, day: IDay): void {
  //   this.notificationService.show({
  //     content: `${day.text} was ${checked ? "selected" : "deselected"}`,
  //     appendTo: this.container,
  //     position: { horizontal: "left", vertical: "top" },
  //     animation: { type: "fade", duration: 300 },
  //     type: { style: `${checked ? "success" : "info"}`, icon: true },
  //     hideAfter: 5000,
  //   });
  // }



  public status = "#10b507";
  public buttons = [
    { text: "Away", icon: "k-i-clock", color: "#f0c505" },
    {
      text: "Available",
      icon: "k-i-check-circle",
      color: "#10b507",
      selected: true,
    },
    { text: "Offline", icon: "k-i-close-circle", color: "#707070" },
    { text: "Do not disturb", icon: "k-i-minus-circle", color: "#e30000" },
  ];
  public img =
    "https://demos.telerik.com/kendo-ui/content/web/panelbar/nancy.jpg";

  public cselectedChange(e: boolean, btn: IButton): void {
    this.status = btn.color;
  }

  public disabled = true;

  public toggleDisabled(): void {
    this.disabled = !this.disabled
  }

  public eventsone: string[] = [];

  public onClick(): void {
    this.log("click");
  }

  public onFocus(): void {
    this.log("focus");
  }

  public onBlur(): void {
    this.log("blur");
  }

  public selectedChange(): void {
    this.log("selectedChange");
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }


  public size: ButtonSize = "medium";
  public rounded: ButtonRounded = "medium";
  public fillMode: ButtonFillMode = "solid";
  public themeColor: ButtonThemeColor = "base";

  public onSelectedChange(e: boolean): void {
    console.log(e + 'hi selected change')
  }

  public options: Option[] = [
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
      data: ["solid", "flat", "outline", "clear", "link"],
      default: this.fillMode,
    },
    {
      type: "themeColor",
      data: [
        "base",
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "inverse",
      ],
      default: this.themeColor,
    },
  ];

  public changeHandler({ optionType, optionValue }: IOption): void {
    this[optionType] = optionValue;
  }

  // public selectedWeekChange(isTrue: boolean, day: IDay): void {
  //   if (isTrue) {
  //     this.selectedDays.push(day.index);
  //   } else {
  //     const index = this.selectedDays.indexOf(day.index);
  //     this.selectedDays.splice(index, 1);
  //   }
  //   this.selectedDays.sort((a, b) => a - b);
  //   this.show(isTrue, day);
  // }

  // public show1(isChecked: boolean, day: IDay): void {
  //   if (isChecked) {
  //     this.showNotification1(isChecked, day);
  //   } else {
  //     this.showNotification1(isChecked, day);
  //   }
  // }

  // Show notification
  // public showNotification1(checked: boolean, day: IDay): void {
  //   this.notificationService.show({
  //     content: `${day.text} was ${checked ? "selected" : "deselected"}`,
  //     appendTo: this.container,
  //     position: { horizontal: "left", vertical: "top" },
  //     animation: { type: "fade", duration: 300 },
  //     type: { style: `${checked ? "success" : "info"}`, icon: true },
  //     hideAfter: 5000,
  //   });
  // }

  //fab items button 
  public fabItems = [
    { icon: "google", label: "Google" },
    { icon: "reddit", label: "Reddit" },
    { icon: "dribbble", label: "Dribbble" },
  ];

  // floating button
  public onFabClick(): void {
    alert("Added");
  }

  // chips 
  public chips = [
    {
      label: "Pedro Afonso",
      iconClass: "k-chip-avatar pedro",
    },
    {
      label: "Thomas Hardy",
      iconClass: "k-chip-avatar thomas",
    },
    {
      label: "Christina Berg",
      iconClass: "k-chip-avatar christina",
    },
    {
      label: "Paula Wilson",
      iconClass: "k-chip-avatar paula",
    },
  ];

  // button
  public onButtonClick(): void {
    alert('click')
  }

  // dropdown and split button and data
  public dropDownButtonItems = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];
  public splitButtonItems = [
    {
      text: "Keep Text Only",
      icon: "paste-plain-text",
      click: (): void => {
        console.log("Keep Text Only click handler");
      },
    },
    {
      text: "Paste as HTML",
      icon: "paste-as-html",
    },
    {
      text: "Paste Markdown",
      icon: "paste-markdown",
    },
    {
      text: "Set Default Paste",
    },
  ];

  public onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    if (dataItem) {
      console.log(dataItem.text);
    }
  }

  ngOnInit() {
  }

}
