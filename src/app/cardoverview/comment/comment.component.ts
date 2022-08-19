import { Component, Input, OnInit } from '@angular/core';
import { MyCardComponent, MyComment } from '../cardoverview.component';

@Component({
  selector: 'post-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() public card: MyCardComponent;

  public commentLikesCount(comment: MyComment): void {
    if (comment.likes > 0) {
      comment.likes -= 1;
    } else {
      comment.likes += 1;
    }
  }

  public commentHeartIcon(comment: MyComment): string {
    if (comment && comment.likes > 0) {
      return "k-icon k-i-heart";
    } else {
      return "k-icon k-i-heart-outline";
    }
  }

  public postComment(card: MyCardComponent): void {
    if (card.newCommentTextValue) {
      const comment = { text: card.newCommentTextValue, likes: 0 };
      card.comments.push(comment);
      card.newCommentTextValue = "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
