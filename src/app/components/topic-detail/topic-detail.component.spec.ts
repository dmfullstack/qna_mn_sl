import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {TopicService} from '../../services/topic.service';
import {QuestionService} from '../../services/question.service';
import { TopicDetailComponent } from './topic-detail.component';
import {QuestionSummaryComponent } from '../question-summary/question-summary.component';

describe('TopicDetailComponent', () => {
  let component: TopicDetailComponent;
  let fixture: ComponentFixture<TopicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailComponent, QuestionSummaryComponent ],
      imports: [ RouterTestingModule ],
      providers: [QuestionService, TopicService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
