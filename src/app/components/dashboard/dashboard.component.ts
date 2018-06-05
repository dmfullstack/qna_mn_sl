import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import {Topic} from '../../model/topic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private limit: Number = 5;
  hotTopics: Topic[] = [];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.getHotTopics();
  }

  getHotTopics(): void {
    this.hotTopics = this.topicService.getAllTopics(this.limit);
  }
}
