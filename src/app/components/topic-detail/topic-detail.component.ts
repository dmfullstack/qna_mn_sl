import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Topic} from '../../model/topic';
import {Question} from '../../model/question';
import { TopicService } from '../../services/topic.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic: Topic;
  questions: Array<Question>;

  constructor(private topicService: TopicService,
    private questionService: QuestionService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.setTopicFromRoute();
  }

  setTopicFromRoute(): void {
    const id: String = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.topic = this.topicService.getTopic(Number(id));
      this.questions = this.questionService.getAllQuestions(this.topic.id);
    }
  }

  postNewQuestion(text: String): void {
    text = text.trim();
    // validation
    if (!text) { return; }
    const newQuestion: Question = { description: text, topic: this.topic} as Question;
    const savedQuestion: Question = this.questionService.saveQuestion(newQuestion);
    this.questions.unshift(savedQuestion);
  }

  deleteQuestion(question: Question) {
    console.log('topic-detail');
    this.questions.splice(this.questions.indexOf(question), 1);
    this.questionService.deleteQuestion(question);
  }
}
