import { Component, OnInit, Input } from '@angular/core';
import { MyCardComponent } from '../cardoverview.component';

@Component({
  selector: 'comment-actions',
  templateUrl: './comment-actions.component.html',
  styleUrls: ['./comment-actions.component.scss']
})
export class CommentActionsComponent implements OnInit {

  @Input() public card: MyCardComponent;

  public commentClick(card: MyCardComponent): void {
    card.commentsExpanded = !card.commentsExpanded;
  }

  public postLikesCount(card: MyCardComponent): void {
    if (card.postLiked) {
      (card.postLikes as number) -= 1;
    } else {
      (card.postLikes as number) += 1;
    }

    card.postLiked = !card.postLiked;
  }

  public postHeartIcon(card: MyCardComponent): string {
    return card.postLiked ? "k-icon k-i-heart" : "k-icon k-i-heart-outline";
  }


  constructor() { }

  ngOnInit() {
  }

}
