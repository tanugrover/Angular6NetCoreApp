import{Component} from '@angular/core';
import{ApiService} from './app.service';
import{ FormBuilder,Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@Component({

  templateUrl:'./login.component.html'  
})

export class LoginComponent {
    form
    constructor( private fb:FormBuilder,private auth:AuthService){
        this.form = fb.group({
            email:['',Validators.required],
            password:['',Validators.required]
        })
    }
    login(credentials){
        console.log(credentials);
        this.auth.login(credentials);
    }
}