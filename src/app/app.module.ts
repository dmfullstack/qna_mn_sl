import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { CommentComponent } from './components/comment/comment.component';
import { TopicService } from './services/topic.service';
import { QuestionService } from './services/question.service';
import { CommentService } from './services/comment.service';
import { TopicSummaryComponent } from './components/topic-summary/topic-summary.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { QuestionSummaryComponent } from './components/question-summary/question-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionComponent,
    CommentComponent,
    TopicSummaryComponent,
    TopicDetailComponent,
    QuestionSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TopicService, QuestionService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
