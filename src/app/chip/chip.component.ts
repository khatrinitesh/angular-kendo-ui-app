import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ButtonRounded, ButtonSize, ChipFillMode, ChipRemoveEvent, ChipThemeColor } from "@progress/kendo-angular-buttons";
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
// import { GridDataResult } from '@progress/kendo-angular-grid';
import { IOption } from "./configurator/models";
// import { sampleProducts } from './sampleproducts';
import { NotificationService } from "@progress/kendo-angular-notification";

export type Option = {
  type: string;
  data: string[];
  default: ButtonSize | ButtonRounded | ChipFillMode | ChipThemeColor;
};

// action chips
export interface IChip {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  // START - CHIP EVENTS 
  public events: string[] = [];

  public onContentClickCe(): void {
    this.log("contentClick");
  }

  public onFocusCe(): void {
    this.log("focus");
  }

  public onBlurCe(): void {
    this.log("blur");
  }

  public onRemoveCe(): void {
    this.log("remove");
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }
  // END - CHIP EVENTS 


  // START - DISPLAYING AVATARS
  public chipsavatars = [
    {
      labelav: "Pedro Afonso",
      iconClassav: "k-chip-avatar pedro",
      icon: 'https://demos.telerik.com/kendo-ui/content/web/Customers/SPLIR.jpg'
    },
    {
      labelav: "Thomas Hardy",
      iconClassav: "k-chip-avatar thomas",
    },
    {
      labelav: "Christina Berg",
      iconClassav: "k-chip-avatar christina",
    },
    {
      labelav: "Paula Wilson",
      iconClassav: "k-chip-avatar paula",
    },
  ];
  // END - DISPLAYING AVATARS

  // START - CUSTOM REMOVE ICONS
  public chipsIcon = [
    {
      label: "Apple",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-delete",
    },
    {
      label: "Strawberry",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-cancel-circle",
    },
    {
      label: "Banana",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-close-outline",
    },
    {
      label: "Kiwi",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-close",
    },
  ]
  public onRemoveIcon(e: ChipRemoveEvent): void {
    const index = this.chips.findIndex((c) => c.label === e.sender.label);
    this.chips.splice(index, 1);
  }
  // END - CUSTOM REMOVE ICONS

  // START ACTION CHIPS
  constructor(private notificationService: NotificationService) { }
  public onChipClick(chip: IChip): void {
    this.notificationService.show({
      content: `Chip is clicked: ${chip.label}`,
      animation: { type: "slide", duration: 300 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "warning", icon: true },
      hideAfter: 1500,
    });
  }
  public chipActions = [
    {
      label: "Night mode",
      icon: "brightness-contrast",
    },
    {
      label: "Set alarm",
      icon: "clock",
    },
    {
      label: "Lock doors",
      icon: "lock",
    },
    {
      label: "Turn on security",
      icon: "home",
    },
  ];
  // END ACTION CHIPS

  // start filter chips
  // loadProducts(): GridDataResult {
  //   throw new Error('Method not implemented.');
  // }
  // public filterchips = [
  //   { label: "Beverages" },
  //   { label: "Condiments" },
  //   { label: "Produce" },
  //   { label: "Meat/Poultry" },
  //   { label: "Seafood" },
  // ];

  // public state: State = { filter: { logic: "or", filters: [] } };

  // public gridData: GridDataResult = this.loadProducts();

  // public selectedChange(selectedChips: []): void {
  //   this.state.filter = {
  //     logic: "or",
  //     filters: selectedChips.map((index) => ({
  //       field: "Category.CategoryName",
  //       operator: "contains",
  //       value: this.chips[index].label,
  //     })),
  //   };
  //   this.loadProducts();
  // }
  // end filter chips


  // single selection
  public singleSelection = [
    {
      label: "Apple",
      icon: "marker-pin-target",
      selected: true,
    },
    {
      label: "Strawberry",
    },
    {
      label: "Banana",
      icon: "marker-pin-target",
      selected: false,
    },
    {
      label: "Kiwi",
      selected: false,
    },
  ];

  // multiple selection
  public multipleSelection = [
    {
      label: "Apple",
      icon: "marker-pin-target",
      selected: true,
    },
    {
      label: "Strawberry",
      selected: true,
    },
    {
      label: "Banana",
      icon: "marker-pin-target",
      selected: false,
    },
    {
      label: "Kiwi",
      selected: false,
    },
  ];

  @ViewChild("contactslistuc", { static: true }) public list: AutoCompleteComponent;

  public contactsuc: Array<{ label: string }> = [
    { label: "Pedro Afonso" },
    { label: "Maria Shore" },
    { label: "Thomas Hardy" },
    { label: "Christina Berg" },
    { label: "Paula Wilson" },
  ];

  public selectedContactsuc: Array<{ label: string }> = [this.contactsuc[1]];

  public valueChangeUc(contact: string): void {
    if (contact === "") {
      return;
    }

    const contactDatauc = this.contacts.find((c) => c.label === contact);

    if (!this.selectedContacts.includes(contactDatauc)) {
      this.selectedContacts.push(contactDatauc);
    }

    this.list2.reset();
  }

  public onRemoveUc(e: ChipRemoveEvent): void {
    const index = this.selectedContacts
      .map((c) => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }

  @ViewChild("contactslist1", { static: true }) public list2: AutoCompleteComponent;

  public contacts1: Array<{ label: string }> = [
    { label: "Pedro Afonso" },
    { label: "Maria Shore" },
    { label: "Thomas Hardy" },
    { label: "Christina Berg" },
    { label: "Paula Wilson" },
  ];

  public selectedContacts1: Array<{ label: string }> = [this.contacts1[1]];

  public valueChange1(contact: string): void {
    if (contact === "") {
      return;
    }

    const contactData = this.contacts.find((c) => c.label === contact);

    if (!this.selectedContacts.includes(contactData)) {
      this.selectedContacts.push(contactData);
    }

    this.list.reset();
  }

  public onRemove2(e: ChipRemoveEvent): void {
    const index = this.selectedContacts
      .map((c) => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }



  public chipsTime = [
    {
      label: "7:00",
      selected: false,
      removable: true,
    },
    {
      label: "12:30",
      selected: false,
      removable: true,
    },
    {
      label: "18:00",
      selected: false,
      removable: true,
    },
    {
      label: "22:30",
      selected: false,
      removable: true,
    },
  ]

  public onRemoveTime(e: ChipRemoveEvent): void {
    const label = e.sender.element.nativeElement.innerText;
    const index = this.chipsTime.findIndex((c) => c.label === label);
    this.chipsTime.splice(index, 1)
  }


  public onRemoveCS(e: ChipRemoveEvent): void {
    const index = this.chips.findIndex((c) => c.label === e.sender.label)
    this.chips.splice(index, 1)
  }

  public chips = [
    {
      label: "Apple",
      selected: false,
      removable: true,
    },
    {
      label: "Strawberry",
      selected: false,
      removable: true,
    },
    {
      label: "Banana",
      selected: false,
      removable: true,
    },
    {
      label: "Kiwi",
      selected: false,
      removable: true,
    },
  ];

  @ViewChild('contactslist', { static: false }) AutoCompleteComponent: any

  public size: ButtonSize = "medium";
  public rounded: ButtonRounded = "medium";
  public fillMode: ChipFillMode = "solid";
  public themeColor: ChipThemeColor = "base";

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
      data: ["solid", "outline"],
      default: this.fillMode,
    },
    {
      type: "themeColor",
      data: ["base", "info", "success", "warning", "error"],
      default: this.themeColor,
    },
  ];

  public changeHandler({ optionType, optionValue }: IOption): void {
    this[optionType] = optionValue;
  }

  public contacts: Array<{ label: string; iconClass: string }> = [
    { label: "Pedro Afonso", iconClass: "k-chip-avatar pedro" },
    { label: "Maria Shore", iconClass: "k-chip-avatar maria" },
    { label: "Thomas Hardy", iconClass: "k-chip-avatar thomas" },
    { label: "Christina Berg", iconClass: "k-chip-avatar christina" },
    { label: "Paula Wilson", iconClass: "k-chip-avatar paula" },
  ];

  public selectedContacts: Array<{ label: string; iconClass: string }> = [
    this.contacts[1],
  ];

  public valueChange(contact: string): void {
    if (contact === "") {
      return;
    }

    const contactData = this.contacts.find((c) => c.label === contact);

    if (
      contactData !== undefined &&
      !this.selectedContacts.includes(contactData)
    ) {
      this.selectedContacts.push(contactData);
    }

    this.list.reset();
  }

  public onRemove(e: ChipRemoveEvent): void {
    console.log("Remove event arguments: ", e);
    const index = this.selectedContacts
      .map((c) => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }



  ngOnInit() {
  }

}
