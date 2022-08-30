import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../articles-info'

@Component({
  selector: 'recommended-article',
  templateUrl: './recommended-article.component.html',
  styleUrls: ['./recommended-article.component.scss']
})
export class RecommendedArticleComponent implements OnInit {
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
