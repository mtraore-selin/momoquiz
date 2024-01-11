import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherDashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CreateQuizComponent } from './pages/quiz/create-quiz/create-quiz.component';
import { EditQuestionComponent } from './pages/quiz/create-quiz/edit-question/edit-question.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarQuestionsComponent } from './pages/quiz/create-quiz/sidebar-questions/sidebar-questions.component';
import { QuestionCardComponent } from './pages/quiz/create-quiz/question-card/question-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChallengeReportComponent } from './pages/challenge/challenge-report/challenge-report.component';
import { ChallengeReportSummaryComponent } from './pages/challenge/challenge-report/challenge-report-summary/challenge-report-summary.component';
import { PlayQuizComponent } from './pages/quiz/play-quiz/play-quiz.component';
import { HostQuizComponent } from './pages/quiz/host-quiz/host-quiz.component';
import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from 'angular-bootstrap-datetimepicker';

import { CommonModule } from '@angular/common';
import { QuiztableComponent } from './teacher/quiztable/quiztable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChallengeService } from './services/challenge.service';
import { ChallengetableComponent } from './teacher/challengetable/challengetable.component';
import { DisplayQuizComponent } from './pages/quiz/display-quiz/display-quiz.component';
import { PlayerlistComponent } from './pages/challenge/challenge-report/playerlist/playerlist.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { ChartsModule } from 'ng2-charts';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentchallangetableComponent } from './student/studentchallangetable/studentchallangetable.component';
import { PostChallengeFeedbackComponent } from './pages/challenge/post-challenge-feedback/post-challenge-feedback.component';
import { JoinChallengeComponent } from './pages/challenge/join-challenge/join-challenge.component';
import { RatingComponent } from './pages/challenge/post-challenge-feedback/rating/rating.component';
import { StudentReportComponent } from './student/student-report/student-report.component';

import { StudentchallengeReportSummaryComponent } from './student/student-report/studentchallenge-report-summary/studentchallenge-report-summary.component';
import { QuizInfoComponent } from './pages/quiz-info/quiz-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TeacherDashboardComponent,
    CreateQuizComponent,
    EditQuestionComponent,
    HomeComponent,
    SidebarQuestionsComponent,
    QuestionCardComponent,
    ChallengeReportComponent,
    ChallengeReportSummaryComponent,
    QuiztableComponent,
    PlayQuizComponent,
    HostQuizComponent,
    PlayerlistComponent,
    ChatbotComponent,
    StudentdashboardComponent,
    StudentComponent,
    StudentchallangetableComponent,
    ChallengetableComponent,
    DisplayQuizComponent,
    PostChallengeFeedbackComponent,
    JoinChallengeComponent,
    RatingComponent,
    StudentchallengeReportSummaryComponent,
    StudentReportComponent,
    QuizInfoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    DlDateTimeDateModule, // <--- Determines the data type of the model
    DlDateTimePickerModule,
    ChartsModule,
    NgxPaginationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
