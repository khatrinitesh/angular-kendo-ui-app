import { Component, OnInit } from '@angular/core';
import { FilterExpression } from "@progress/kendo-angular-filter";
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

@Component({
  selector: 'app-overviewfilter',
  templateUrl: './overviewfilter.component.html',
  styleUrls: ['./overviewfilter.component.scss']
})
export class OverviewfilterComponent implements OnInit {

  public value: CompositeFilterDescriptor = {
    logic: "or",
    filters: [
      { field: "budget", operator: "gt", value: 60 },
      { field: "country", operator: "contains" },
      { field: "discontinued", operator: "eq", value: true },
      {
        logic: "and",
        filters: [
          { field: "ordered on", operator: "lt", value: new Date(Date.now()) },
        ],
      },
    ],
  };

  public filters: FilterExpression[] = [
    {
      field: "country",
      title: "Country",
      editor: "string",
      operators: ["neq", "eq", "contains"],
    },
    {
      field: "budget",
      editor: "number",
    },
    {
      field: "discontinued",
      title: "Discontinued",
      editor: "boolean",
    },
    {
      field: "ordered on",
      title: "Ordered on",
      editor: "date",
    },
  ];

  onFilterChange(value: CompositeFilterDescriptor): void {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
