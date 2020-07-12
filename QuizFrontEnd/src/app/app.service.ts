import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { questionaire } from './questionaire.component';
@Injectable()
export class ApiService {


 constructor(private http:HttpClient) {}

 private selectedQuestion = new Subject<any>();
 questionSelected= this.selectedQuestion.asObservable();

 private selectedQuiz= new Subject<any>();
 quizSelected = this.selectedQuiz.asObservable();

 selectQuiz(quiz){
     console.log('in select'+quiz);
     this.selectedQuiz.next(quiz);
 }
 post(question) {
   console.log('while posting question:'+question);
    this.http.post('http://localhost:64765/api/quiz',question).subscribe(res=> console.log(res));
 }

 putQuestion(question) {
    this.http.put(`http://localhost:64765/api/quiz/${question.id}`,question).subscribe(res=> console.log(res));
}

getQuizList() {
    return this.http.get("http://localhost:64765/api/quizzes");
}

getAllQuizList() {
    return this.http.get("http://localhost:64765/api/quizzes/all");
}

 getQuestions(quizId){
     return this.http.get(`http://localhost:64765/api/quiz/${quizId}`);
 }

 selectQuestion(question) {
    this.selectedQuestion.next(question);
 }

 postQuiz(quiz) {
    this.http.post('http://localhost:64765/api/quizzes',quiz).subscribe(res=> console.log(res));
}
}