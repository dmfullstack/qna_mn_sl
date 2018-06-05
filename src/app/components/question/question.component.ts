import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../../model/question';
import {Comment} from '../../model/comment';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question;
  comments: Array<Comment>;

  constructor(private route: ActivatedRoute,
    private questionService: QuestionService,
    private commentService: CommentService) { }

  ngOnInit() {
    this.setQuestionFromRoute();
  }

  setQuestionFromRoute(): void {
    const id: String = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.question = this.questionService.getQuestion(Number(id));
      this.comments = this.commentService.getComments(this.question.id);
    }
  }

  postNewComment(text: String): void {
    text = text.trim();
    // validation
    if (!text) { return; }
    const newComment: Comment = { description: text, question: this.question } as Comment;
    const savedComment: Comment = this.commentService.saveComment(newComment);
    this.comments.unshift(savedComment);
  }

  deleteComment(comment: Comment) {
    this.comments.splice(this.comments.indexOf(comment), 1);
    this.commentService.deleteComment(comment);
  }
}
