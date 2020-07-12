import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './app.service';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'quizList',
  templateUrl: './quizList.component.html'
})
export class QuizListComponent {
  quiz={}
    quizList
  ngOnInit() {
    this.service.getQuizList().subscribe(res=>{console.log('in onInit'+res);this.quizList=res});
  }
  constructor(private service:ApiService) {}
 
}
