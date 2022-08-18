import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RTL } from "@progress/kendo-angular-l10n";
import { Products } from "./products";
import { Product, Group } from "./models";
// import { AggregateDescriptor, process } from "@progress/kendo-data-query";
// import {
//   Workbook,
//   WorkbookSheetColumn,
//   WorkbookSheetRow,
//   WorkbookSheetRowCell,
//   WorkbookSheet,
// } from "@progress/kendo-ooxml";
// import { saveAs } from "@progress/kendo-file-saver";


@Component({
  selector: 'app-overviewee',
  templateUrl: './overviewee.component.html',
  styleUrls: ['./overviewee.component.scss']
})
export class OvervieweeComponent implements OnInit {



  public data: Product[] = Products;

  // public data: any[] = Products;

  // public fileName: string = "Products.xlsx";

  // constructor(private http: HttpClient) { }

  // public save(component: any): void {
  //   component.toDataURL().then((dataURL: string) => {
  //     const base64 = dataURL.split(";base64,")[1];

  //     this.http.post(SAVE_URL, {
  //       base64: base64,
  //       fileName: this.fileName
  //     }).subscribe();
  //   });
  // }

  // public data: Product[] = Products;

  // public exportNewWorkbook(): void {
  //   const workbook = new Workbook({
  //     sheets: <WorkbookSheet[]>[
  //       {
  //         // Column settings (width)
  //         columns: <WorkbookSheetColumn[]>[
  //           { autoWidth: true },
  //           { autoWidth: true },
  //         ],
  //         // Title of the sheet
  //         name: "Customers",
  //         // Rows of the sheet
  //         rows: <WorkbookSheetRow[]>[
  //           // First row (header)
  //           {
  //             cells: <WorkbookSheetRowCell[]>[
  //               // First cell
  //               { value: "Company Name" },
  //               // Second cell
  //               { value: "Contact" },
  //             ],
  //           },
  //           // Second row (data)
  //           {
  //             cells: <WorkbookSheetRowCell[]>[
  //               { value: "Around the Horn" },
  //               { value: "Thomas Hardy" },
  //             ],
  //           },
  //           // Third row (data)
  //           {
  //             cells: <WorkbookSheetRowCell[]>[
  //               { value: "B Beverages" },
  //               { value: "Victoria Ashworth" },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   });
  //   workbook.toDataURL().then((dataUrl) => {
  //     saveAs(dataUrl, "Test.xlsx");
  //   });
  // }

  // public aggregates: AggregateDescriptor[] = [
  //   { field: "UnitPrice", aggregate: "sum" },
  // ];

  // public group: Group[] = [
  //   {
  //     field: "Category.CategoryName",
  //     aggregates: this.aggregates,
  //   },
  // ];

  // public data: Product[] = process(Products, {
  //   group: this.group,
  // }).data;

  // public group: { field: string }[] = [
  //   {
  //     field: "Category.CategoryName",
  //   },
  // ];

  // public data: Product[] = process(Products, {
  //   group: this.group,
  // }).data;

  // public data: Product[] = Products;

  // public fields: string[] = Object.keys(this.data[0]);

  // public group: { field: string }[] = [
  //   {
  //     field: "Category.CategoryName",
  //   },
  // ];

  // public data: Product[] = process(Products, {
  //   group: this.group,
  // }).data;

  ngOnInit() {
  }

}
