import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './app.service';

@Component({
  selector: 'play',
  templateUrl: './play.component.html'
})
export class PlayComponent {
 
    quizzes
  constructor(private service:ApiService) {}
 ngOnInit(){
     this.service.getAllQuizList().subscribe(res=> this.quizzes=res);
 }

}
