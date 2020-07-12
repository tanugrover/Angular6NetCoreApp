import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './app.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {
 
  quiz:any={};
  ngOnInit(){
    this.service.quizSelected.subscribe(res=> {this.quiz=res; });
      }
  constructor(private service:ApiService) {}
  postQuiz(quiz) {
    console.log('In quiz::'+quiz);
    this.service.postQuiz(quiz);
   
  }

  
  


}
