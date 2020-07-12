import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { questionaire } from './questionaire.component';
import { questionsComponent} from './questions.component';
import { ApiService } from './app.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './Home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz.component';
import {QuizListComponent} from './quizList.component';
import {RegisterComponent} from './register.component';
import {AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';
import {LoginComponent} from './login.component';
import {PlayComponent} from './play.component';
import {PlayQuizComponent} from './playQuiz.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {FinishComponent} from './finish.component';
const routes = [
  {path:'question',component:questionaire},
  {path:'question/:quizId',component:questionaire},
  {path:'questions',component:questionsComponent},
  {path:'questions/:quizId',component:questionsComponent},
  {path:'',component:RegisterComponent},
  {path:'quiz',component:QuizComponent},
  {path:'quizList',component:QuizListComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'play',component:PlayComponent},
  {path:'playQuiz/:quizId',component:PlayQuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    questionaire,
    questionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizListComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule

  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[FinishComponent]
})
export class AppModule { }
