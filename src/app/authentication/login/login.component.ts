import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from 'src/app/admin/Models/Role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() registerEvent = new EventEmitter()
  @Output() loginEvent = new EventEmitter()

  constructor(private router:Router, private readonly authService:AuthService) {
  }

  public email!:string;
  public password!:string;

  /*Login() {
   this.authService.Login(this.email,this.password).subscribe(user => {
    localStorage.setItem('user', JSON.stringify(user));
    if(user.role == Role.USER) {
      this.router.navigateByUrl('/user/user');
     }
     else if(user.role == Role.ADMIN ) {
      this.router.navigateByUrl('admin/users');
     }
   })
  }*/
}
