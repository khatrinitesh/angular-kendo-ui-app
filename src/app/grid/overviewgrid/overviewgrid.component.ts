import { Component, OnInit, ViewChild } from '@angular/core';
// import { DataBindingDirective } from "@progress/kendo-angular-grid";
// import { process } from "@progress/kendo-data-query";
// import { employees } from "./employees";
// import { images } from "./images";
import { Customer } from "./models";
import { sampleCustomers } from "./customers";
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-overviewgrid',
  templateUrl: './overviewgrid.component.html',
  styleUrls: ['./overviewgrid.component.scss']
})
export class OverviewgridComponent implements OnInit {

  public gridView: GridDataResult;
  public pageSize = 5;
  public skip = 0;

  private item = sampleCustomers;

  constructor() {
    this.loadItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    console.log('item', this.item)
    this.gridView = {
      data: this.item.slice(this.skip, this.skip + this.pageSize),
      total: this.item.length,
    };
  }
  // public gridData: Product[] = [
  //   {
  //     ProductID: 1,
  //     ProductName: "Chai",
  //     UnitPrice: 18,
  //     Category: {
  //       CategoryID: 1,
  //       CategoryName: "Beverages",
  //     },
  //   },
  //   {
  //     ProductID: 2,
  //     ProductName: "Chang",
  //     UnitPrice: 19,
  //     Category: {
  //       CategoryID: 1,
  //       CategoryName: "Beverages",
  //     },
  //   },
  //   {
  //     ProductID: 3,
  //     ProductName: "Aniseed Syrup",
  //     UnitPrice: 10,
  //     Category: {
  //       CategoryID: 2,
  //       CategoryName: "Condiments",
  //     },
  //   },
  // ];


  ngOnInit() {
  }

}
