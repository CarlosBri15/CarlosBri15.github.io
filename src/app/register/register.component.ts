import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor( private userService: UserService, private router: Router ) { }

  Register(data){
    this.userService.Register(data.value).subscribe((response: { token: string }) => {
      alert('User saved');
      localStorage.setItem('token', response.token);
      this.router.navigate(['book']);
    }, (error: HttpErrorResponse) => {
        alert(error.message);
    });
  };
}
