import { Component, OnInit } from '@angular/core';
import { AvatarThemeColor, AvatarRounded, AvatarSize, AvatarFill } from "@progress/kendo-angular-layout";

@Component({
  selector: 'customavataroverview',
  templateUrl: './avataroverview.component.html',
  styleUrls: ['./avataroverview.component.scss']
})
export class AvataroverviewComponent implements OnInit {

  // custom content radio button 
  public avatar = '🍒'

  // start fillmode
  public fillOptions: Array<AvatarFill> = [
    "solid",
    "outline"
  ]
  // end fillmode

  // start size 
  public sizes: Array<AvatarSize> = [
    'small',
    'medium',
    'large'
  ]
  public imageSrc = [
    'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg'
  ]
  // end size

  // start roundness
  public roundedOptions: AvatarRounded[] = [
    "small",
    "medium",
    "large",
    "full",
  ]
  // end roundness

  // start theme color
  public themeColors: Array<AvatarThemeColor> = [
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]
  // end theme color

  // start type 
  public src =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg";
  // end type 

  // start key features
  public firstContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg";
  public secondContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg";

  public contactImages: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
      {
        avatar: this.firstContactImage,
        name: "Michael Holz",
        position: "Manager",
      },
      {
        avatar: this.secondContactImage,
        name: "André Stewart",
        position: "Product Manager",
      },
    ];

  public contactInitials: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
      { avatar: "JS", name: "Jason Smith", position: "UX Designer" },
      { avatar: "GP", name: "George Porter", position: "Software Engineer" },
    ];
  // end key features

  constructor() { }

  ngOnInit() {
  }

}
