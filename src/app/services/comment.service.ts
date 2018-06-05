import { Injectable } from '@angular/core';
import {Comment} from '../model/comment';
import {COMMENTS} from '../mocks/mock-store';
import MockGenerator from '../mocks/mock-generator';

@Injectable()
export class CommentService {

  constructor() { }

  saveComment(newComment: Comment): Comment {

    newComment.id = MockGenerator.commentIdGenerator++;
    newComment.createdDate = new Date();
    COMMENTS.push(newComment);

    return newComment;
  }

  deleteComment(existingComment: Comment): void {
    COMMENTS.splice(COMMENTS.indexOf(existingComment), 1);
  }

  getComments(questionId: Number): Array<Comment> {
    return COMMENTS.filter((comment) => (comment.question.id === questionId));
  }
}
