import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { QuestionSummaryComponent } from './question-summary.component';
import {QuestionService} from '../../services/question.service';


describe('QuestionSummaryComponent', () => {
  let component: QuestionSummaryComponent;
  let fixture: ComponentFixture<QuestionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSummaryComponent ],
      imports: [ RouterTestingModule ],
      providers: [ QuestionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
