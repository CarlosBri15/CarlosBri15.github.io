import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor( private http: HttpClient ) { }

  LogIn(data){
    return this.http.post('http://localhost:3000/user/login', data);
  }

  Register(data){
    return this.http.post('http://localhost:3000/user/', data);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
