import { Question } from '../model/question';
import {Topic} from '../model/topic';
import {Comment} from '../model/comment';

export default class MockGenerator {

    static questionIdGenerator = 100;
    static commentIdGenerator = 1000;
    static topicIdGenerator = 1;

    static topicDescTemplate(name: String): String {
        return `You can post your questions related to ${name} in this forum.
        People who know answers on the questions would reply.`;
    }

    static questionDescTemplate(sampleId: Number): String {
        return `This is a sample question #${sampleId} that was generated using a generator logic.
        Please feel free to tweak at your convenience`;
    }

    static commentDescTemplate(sampleId: Number): String {
      return `This is a sample comment #${sampleId}.`;
    }

    static questionGenerator(topic: Topic, sampleId: Number): Question {
        return {
            id: sampleId,
            description: this.questionDescTemplate(sampleId),
            createdDate: new Date(),
            topic
        };
    }

    static questionsGenerator(topic: Topic, limit: number): Array<Question> {
        const questionBank: Array<Question> = [];
        for (let idx = 1; idx <= limit; idx++) {
            questionBank.push(this.questionGenerator(topic, this.questionIdGenerator++));
        }
        return questionBank;
    }

    static commentGenerator(question: Question, sampleId: Number): Comment {
      return {
          id: sampleId,
          description: this.commentDescTemplate(sampleId),
          createdDate: new Date(),
          question
      };
    }

    static commentsGenerator(question: Question, limit: number): Array<Comment> {
      const comments: Array<Comment> = [];
      for (let idx = 1; idx <= limit; idx++) {
          comments.push(this.commentGenerator(question, this.commentIdGenerator++));
      }
      return comments;
  }
}
