import { Injectable } from '@angular/core';
import {Topic} from '../model/topic';
import {TOPICS} from '../mocks/mock-store';
import { Question } from '../model/question';

@Injectable()
export class TopicService {

  private topics: Topic[] = [];

  constructor() {
    this.topics = TOPICS || [];
  }

  getAllTopics(limitBy: Number): Topic[] {
    return this.topics.slice(0, limitBy.valueOf());
  }

  getTopic(topicId: Number): Topic {
    return this.topics.filter((topic) => (topic.id === topicId))[0];
  }
}
