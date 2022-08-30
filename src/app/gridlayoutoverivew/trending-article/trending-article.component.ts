import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../articles-info';

@Component({
  selector: 'trending-article',
  templateUrl: './trending-article.component.html',
  styleUrls: ['./trending-article.component.scss']
})
export class TrendingArticleComponent implements OnInit {

  @Input() public position: number;
  @Input() public article: Article;
  public formattedDate = "";

  public ngOnInit(): void {
    this.formattedDate =
      this.article.date.toLocaleString("en-us", { month: "short" }) +
      " " +
      this.article.date.getDate();
  }

  constructor() { }

}
