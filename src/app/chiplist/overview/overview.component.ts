import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public meals: Array<{ name: string; icon: string; selected?: boolean }> = [
    { name: "Pizza", icon: "🍕", selected: true },
    { name: "Sushi", icon: "🍣" },
    { name: "Burger", icon: "🍔" },
  ];
  public additions: Array<{ label: string }> = [
    { label: "Ketchup" },
    { label: "Mustard" },
    { label: "Мayonnaise" },
  ];

  public selectedMeal(meal: { name: string; icon: string }): void {
    switch (meal.name) {
      case "Pizza":
        this.additions = [
          { label: "Ketchup" },
          { label: "Mustard" },
          { label: "Мayonnaise" },
        ];
        break;
      case "Sushi":
        this.additions = [
          { label: "Wasabi" },
          { label: "Ginger" },
          { label: "Soy sauce" },
        ];
        break;
      case "Burger":
        this.additions = [
          { label: "Onions" },
          { label: "Avocado" },
          { label: "Eggs" },
        ];
        break;
      default:
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
