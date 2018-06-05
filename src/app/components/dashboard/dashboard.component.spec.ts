import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TopicSummaryComponent } from '../topic-summary/topic-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import {TopicService} from '../../services/topic.service';
import {QuestionService} from '../../services/question.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, TopicSummaryComponent ],
      imports: [ RouterTestingModule ],
      providers: [ TopicService, QuestionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
