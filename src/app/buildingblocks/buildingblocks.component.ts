import { Component, OnInit, Sanitizer } from '@angular/core';
import * as  moment from 'moment';
import { CardAction, ActionsLayout, Orientation } from "@progress/kendo-angular-layout";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


interface MyMediaCard {
  description: string;
  actionButtons: Array<CardAction>;
  actionsLayout: ActionsLayout;
  videoSrc?: SafeResourceUrl;
  imageSrc?: string;
}

@Component({
  selector: 'custombuildingblocks',
  templateUrl: './buildingblocks.component.html',
  styleUrls: ['./buildingblocks.component.scss']
})
export class BuildingblocksComponent implements OnInit {

  public action: CardAction = null;

  public onActionClick(action: CardAction): void {
    this.action = action;
  }

  public cardActions: Array<CardAction> = [
    {
      text: "Like it!",
      flat: true,
    },
    {
      text: "Love it!",
      flat: true,
      primary: true,
    },
    {
      text: "Cook it?",
      flat: true,
    },
  ];


  public expanded = false;
  public btnText = "More";

  public actionsOrientation: Orientation = "horizontal";
  public actionsLayout: ActionsLayout = "end";

  public get horizontalStretched(): boolean {
    return (
      this.actionsOrientation === "horizontal" &&
      this.actionsLayout === "stretched"
    );
  }

  public toggleRecipe(): void {
    this.expanded = !this.expanded;
    this.btnText = this.expanded ? "Less" : "More";
  }

  public toggleLike2(): void {
    this.liked = !this.liked;
  }

  public heartIcon2(): string {
    return this.liked ? "k-icon k-i-heart" : "k-icon k-i-heart-outline";
  }

  public mediaCards: Array<MyMediaCard> = [
    {
      description:
        "The Muppets Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!",
      actionButtons: [{ text: "Add to favourites", flat: true, primary: true }],
      actionsLayout: "start",
      videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/tgbNymZ7vqY"
      ),
    },
    {
      imageSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg",
      description:
        "The Black Sea is bordered by Ukraine, Romania, Bulgaria, Turkey, Georgia, and Russia. It has a positive water balance; that is, a net outflow of water 300 km3 per year through the Bosphorus and the Dardanelles into the Aegean Sea.",
      actionButtons: [
        { text: "Read more", flat: true, primary: false },
        { text: "Add", flat: true, primary: true },
      ],
      actionsLayout: "start",
    },
  ];

  constructor(private sanitizer: DomSanitizer) {

  }


  todayDate = moment().format('MMMM DD, YYYY')



  public thumbnailSrc =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";
  public cover =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg";

  public liked = false;


  public toggleLike(): void {
    this.liked = !this.liked
  }

  btnFormat() {
    const todayDate = moment().format('DD/MMM/YYYY');
    alert('date')
  }

  public heartIcon(): string {
    return this.liked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline'
  }


  ngOnInit() {
  }

}
