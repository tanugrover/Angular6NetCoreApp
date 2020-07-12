import { Component } from '@angular/core';
import {questionaire} from './questionaire.component';
import { questionsComponent} from './questions.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AuthService} from './auth.service';

@Component({
  selector: 'nav',
  template: `<mat-toolbar>
  <button mat-button routerLink="/home"> Quiz Home </button>
  <button mat-button routerLink="/play"> Play </button>
 <span style="flex: 1 1 auto;"> </span>
  <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/"> Register </button>
  <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/login"> Login </button>
   <button mat-button *ngIf="auth.isAuthenticated" (click)="auth.logout()"> Logout </button>
  </mat-toolbar>`
})
export class NavComponent {
  constructor(public auth:AuthService) {}
  title = 'QuizFrontEnd';
}
