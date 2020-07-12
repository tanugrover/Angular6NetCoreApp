import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './app.service';
import {ActivatedRoute} from '@angular/router';
import {} from './questions.component';
@Component({
  selector: 'question',
  templateUrl: './questionaire.component.html',  
  styleUrls: ['./questionaire.component.css']
})
export class questionaire {
 
  question:any={};
  quizId:number;
  ngOnInit(){
    this.quizId=Number(this.route.snapshot.paramMap.get('quizId'));
    this.service.questionSelected.subscribe(res=> {this.question=res; console.log(res);});
  }
  constructor(private service:ApiService,private route:ActivatedRoute) {}
  post(question) {
    question.quizId = this.quizId;
    console.log('in component'+ question);
  this.service.post(question);
   //console.log(question);
  }

  putQuestion(question) {
    this.service.putQuestion(question);
    
    }
  


}
