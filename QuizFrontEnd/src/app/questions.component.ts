import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './app.service';
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class questionsComponent {
  question={}
    questions
  ngOnInit() {
    var quizId=this.route.snapshot.paramMap.get('quizId');
    this.service.getQuestions(quizId).subscribe(res=>this.questions=res);
  }
  constructor(private service:ApiService, private route:ActivatedRoute) {}
 
}
