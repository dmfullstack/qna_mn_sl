import { Component, OnInit, Input } from '@angular/core';
import {Topic} from '../../model/topic';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-topic-summary',
  templateUrl: './topic-summary.component.html',
  styleUrls: ['./topic-summary.component.css']
})
export class TopicSummaryComponent implements OnInit {
  @Input() topic: Topic;
  totalQuestionsPosted: Number;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    if (this.topic) {
      this.totalQuestionsPosted = this.questionService.getQuestionsCount(this.topic.id);
    }
  }
}
