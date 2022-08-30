import { Component, OnInit } from '@angular/core';
import {
  PanelBarExpandMode,
  PanelBarItemModel,
} from "@progress/kendo-angular-layout";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { NewType_1 } from './NewType_1';

type NewType = NewType_1;

@Component({
  selector: 'panelbaroverview',
  templateUrl: './panelbaroverview.component.html',
  styleUrls: ['./panelbaroverview.component.scss']
})
export class PanelbaroverviewComponent implements OnInit {

  public expandMode: PanelBarExpandMode = 1;
  public height = 320;

  public onPanelChange({ event }: { event: NewType; }): void {
    console.log("stateChange: ", event);
  }

  public baseSportsIconUrl =
    "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/";
  public baseIconUrl =
    "https://demos.telerik.com/kendo-ui/content/shared/icons/16/";

  public sportsIconUrl(imageName: string): string {
    return this.baseSportsIconUrl + imageName + ".png";
  }

  public iconUrl(imageName: string): string {
    return this.baseIconUrl + imageName + ".png";
  }

  public kendoPanelBarExpandMode = PanelBarExpandMode.Multiple;
  public categoriesView: Array<PanelBarItemModel>;
  private BASE_URL =
    "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc";

  constructor(private http: HttpClient) {
    this.queryItems();
  }

  public items: Array<PanelBarItemModel> = [
    <PanelBarItemModel>{
      title: "Teams",
      expanded: true,
      children: [
        <PanelBarItemModel>{
          title: "Team 1",
        },
        <PanelBarItemModel>{
          title: "Team 2",
        },
        <PanelBarItemModel>{
          title: "Team 3",
        },
      ],
    },
    <PanelBarItemModel>{
      title: "Forecast",
      children: [
        <PanelBarItemModel>{
          title: "Q1 2017",
        },
        <PanelBarItemModel>{
          title: "Q2 2017",
        },
        <PanelBarItemModel>{
          title: "Q3 2017",
        },
        <PanelBarItemModel>{
          title: "Q4 2017",
        },
      ],
    },
  ];

  private queryItems(): void {
    this.http
      .get(`${this.BASE_URL}/Categories`)
      .pipe(map((response) => response["value"]))
      .subscribe((categories) => {
        this.categoriesView = categories.map((item) => {
          const data = <PanelBarItemModel>{
            title: item.CategoryName,
            id: item.CategoryID,
            children: [],
          };

          this.queryChildItems(item.CategoryID).subscribe((products) => {
            data.children = (products as Array<{ [Key: string]: unknown }>).map(
              (product) => {
                return <PanelBarItemModel>{ title: product.ProductName };
              }
            );
          });

          return data;
        });
      });
  }

  private queryChildItems(
    categoryId: number
  ): Observable<{ [Key: string]: unknown }[]> {
    const queryStr = this.filterToString({
      filter: `CategoryID eq ${categoryId}`,
    });

    return this.http
      .get(`${this.BASE_URL}/Products?${queryStr}`)
      .pipe(map((response) => response["value"]));
  }


  private filterToString({ filter }: { filter?: string }): string {
    return filter ? `&$filter=${filter}` : "";
  }


  public items2: Array<PanelBarItemModel> = [
    <PanelBarItemModel>{
      title: "First item",
      content: "First item content",
      expanded: true,
    },
    <PanelBarItemModel>{
      title: "Second item",
      children: [<PanelBarItemModel>{ title: "Second item child item" }],
    },
  ];

  private baseImageUrl =
    "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  public imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + ".jpg";
  }
  ngOnInit() {
  }

}
