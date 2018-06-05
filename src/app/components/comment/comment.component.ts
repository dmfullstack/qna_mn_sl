import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @Output() deleteCommentRequest: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit() {
  }

  deleteComment(): void {
    this.deleteCommentRequest.emit(this.comment);
  }
}
