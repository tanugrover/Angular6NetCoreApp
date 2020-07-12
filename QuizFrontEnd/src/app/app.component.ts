import { Component } from '@angular/core';
import {questionaire} from './questionaire.component';
import { questionsComponent} from './questions.component';

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'QuizFrontEnd';
}
