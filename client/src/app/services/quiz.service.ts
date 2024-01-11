import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Quiz } from '../models/Quiz';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizData: any;
  private API_URL = environment.apiUrl;
  private createQuizURL = this.API_URL + '/api/v1/quiz/createquiz';
  private DisplayQuizURL = this.API_URL + '/api/v1/teacher/profile/myQuizzes';

  receivedQuiz: EventEmitter<any>;

  constructor(private _http: HttpClient) {
    this.quizData = null;
  }

  createQuiz(quiz: Quiz) {
    return this._http.post(this.createQuizURL, quiz);
  }

  displayQuizzes() {
    return this._http.get(this.DisplayQuizURL);
  }

  setDisplayQuizById(val: number) {
    this.quizData = val;
  }
  getQuizData() {
    console.log('ID', this.quizData);
    return this._http.get(
      this.API_URL +
        '/api/v1/teacher/profile/myQuizzById' +
        '/:' +
        this.quizData
    );
  }
}
