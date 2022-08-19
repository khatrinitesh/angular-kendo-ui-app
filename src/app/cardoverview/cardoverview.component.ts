import { Component, OnInit } from '@angular/core';
export interface MyComment {
  likes: number;
  text: string;
}
export interface MyCardComponent {
  thumbnailSrc: string;
  headerTitle: string;
  headerSubtitle: string;
  commentsExpanded: boolean;
  postLiked: boolean;
  comments: Array<MyComment>;
  newCommentTextValue: string;
  postLikes: number;
  scrollViewItems: Array<Record<string, unknown>>;
}

@Component({
  selector: 'customcardoverview',
  templateUrl: './cardoverview.component.html',
  styleUrls: ['./cardoverview.component.scss']
})
export class CardoverviewComponent implements OnInit {

  public scrollViewCards: Array<MyCardComponent> = [
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg",
      headerTitle: "bg_traditions",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 674,
      scrollViewItems: [
        {
          url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/kukeri.jpg",
        },
        {
          url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg",
        },
        {
          url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg",
        },
      ],
    },
    {
      thumbnailSrc:
        "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila_lakes.jpg",
      headerTitle: "bg_mountains",
      headerSubtitle: "Bulgaria, Europe",
      commentsExpanded: false,
      postLiked: false,
      comments: [],
      newCommentTextValue: "",
      postLikes: 962,
      scrollViewItems: [
        {
          url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
        },
        {
          url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/pamporovo.jpg",
        },
        {
          url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/camping.jpg",
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
