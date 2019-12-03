import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor( private userService: UserService, private router: Router ) { }

  LogIn(data){
    this.userService.LogIn(data.value).subscribe((response: { token: string }) => {
        console.log(data);
        localStorage.setItem('token', response.token);
        this.router.navigate(['book']);
      }, (err) => {
          alert('Incorrect user');
          console.log(err);
        }
      );
  };
}
