import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  
  template: `
  <h1>Thanks for taking the Quiz</h1>
  <h2>Your Score: {{data.correct}}/{{data.total}}</h2>
  `
})
export class FinishComponent {
  title = 'QuizFrontEnd';
  constructor(@Inject(MAT_DIALOG_DATA) public data){}
}
