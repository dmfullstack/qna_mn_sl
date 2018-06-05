import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { TopicSummaryComponent } from './topic-summary.component';
import {QuestionComponent} from '../question/question.component';
import {CommentComponent} from '../comment/comment.component';
import {Topic} from '../../model/topic';

import {QuestionService} from '../../services/question.service';

describe('TopicSummaryComponent', () => {
  let component: TopicSummaryComponent;
  let fixture: ComponentFixture<TopicSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSummaryComponent, QuestionComponent, CommentComponent ],
      imports: [ RouterTestingModule,  ],
      providers: [ QuestionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
