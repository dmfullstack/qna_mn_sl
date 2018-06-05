import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import {QUESTIONS} from '../mocks/mock-store';
import MockGenerator from '../mocks/mock-generator';

@Injectable()
export class QuestionService {

  constructor() { }

  getAllQuestions(topicId: Number): Array<Question> {
    return QUESTIONS.filter((question) => (question.topic.id === topicId));
  }

  getQuestion(questionId: Number): Question {
    return QUESTIONS.find((question) => (question.id === questionId));
  }

  deleteQuestion(existingQuestion: Question): void {
    QUESTIONS.splice(QUESTIONS.indexOf(existingQuestion), 1);
  }

  saveQuestion(newQuestion: Question): Question {
    newQuestion.id = MockGenerator.questionIdGenerator++;
    newQuestion.createdDate = new Date();
    QUESTIONS.push(newQuestion);

    return newQuestion;
  }

  getQuestionsCount(topicId: Number): Number {
    return this.getAllQuestions(topicId).length;
  }
}
