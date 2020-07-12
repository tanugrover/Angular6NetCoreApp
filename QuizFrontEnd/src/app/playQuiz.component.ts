import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {ApiService} from './app.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { FinishComponent } from './finish.component';
@Component({
 
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {
 
   
    questions
  constructor(private service:ApiService,private route:ActivatedRoute,private dialog:MatDialog) {}
 ngOnInit(){
     var quizId= this.route.snapshot.paramMap.get('quizId');
     this.service.getQuestions(quizId).subscribe(res=> {
         this.questions=res
         
         this.questions.forEach(q => {
             q.answers= [
                q.correctAnswer,
                q.answer1,
                q.answer2,
                q.answer3,
                q.answer4

             ];
             this.shuffle(q.answers)
         });

        
        });
 }

 finish() {
     var correct=0;
     this.questions.forEach(q => {
         if(q.selectedAnswer==q.correctAnswer) { correct++;}
     });
     console.log('correct responses: '+ correct);
     const dialogRef = this.dialog.open(FinishComponent,{data:{correct:correct,total:this.questions.length}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${correct}`);
    });
 }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

 step = 0;

 setStep(index: number) {
   this.step = index;
 }

 nextStep() {
   this.step++;
 }

 prevStep() {
   this.step--;
 }
}
