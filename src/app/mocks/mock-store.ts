import {Topic} from '../model/topic';
import {Question} from '../model/question';
import {Comment} from '../model/comment';

import MockGenerator from './mock-generator';

export const TOPICS: Array<Topic> = [
    {
        id: 1,
        name: 'Angular',
        description: MockGenerator.topicDescTemplate('Angular'),
        createdDate: new Date('2015-10-26')
    },
    {
        id: 2,
        name: 'React',
        description: MockGenerator.topicDescTemplate('React'),
        createdDate: new Date('2016-02-01')
    },
    {
        id: 3,
        name: 'Node',
        description: MockGenerator.topicDescTemplate('Node'),
        createdDate: new Date('2016-02-01')
    },
    {
        id: 4,
        name: 'Mongo DB',
        description: MockGenerator.topicDescTemplate('Mongo DB'),
        createdDate: new Date('2016-02-01')
    },
    {
      id: 5,
      name: 'Express JS',
      description: MockGenerator.topicDescTemplate('Express JS'),
      createdDate: new Date('2016-02-01')
    },
    {
      id: 6,
      name: 'Stack Route',
      description: MockGenerator.topicDescTemplate('Stack Route'),
      createdDate: new Date('2016-02-01')
    }
];

export const QUESTIONS: Array<Question> = [].concat(...TOPICS.map((topic, idx) => MockGenerator.questionsGenerator(topic, 10 * ++idx)));


export const COMMENTS: Array<Comment> = [].concat(...QUESTIONS.map((topic, idx) => MockGenerator.commentsGenerator(topic, 10 * ++idx)));
