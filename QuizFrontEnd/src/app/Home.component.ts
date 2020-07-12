import { Component } from '@angular/core';
import {questionaire} from './questionaire.component';
import { questionsComponent} from './questions.component';

@Component({
  
  template: '<quiz></quiz><quizList></quizList>'
})
export class HomeComponent {
  title = 'QuizFrontEnd';
}
