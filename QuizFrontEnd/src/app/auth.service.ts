import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterModule, Router} from '@angular/router';

@Injectable()
export class AuthService {


 constructor(private http:HttpClient, private router:Router) {}

    form

    get isAuthenticated() {
       return !!localStorage.getItem('token')
    }
 register(credentials){    
     this.http.post('http://localhost:64765/api/account',credentials,{responseType:'text'}).subscribe(res => this.authenticate(res));
 }

 login(credentials) {
   this.http.post('http://localhost:64765/api/account/login',credentials,{responseType:'text'}).subscribe(res => this.authenticate(res));

 }

 logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
 }
 authenticate(res){
   localStorage.setItem('token',res);
   this.router.navigate(['/home']);
 }
}