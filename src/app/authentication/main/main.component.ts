import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/admin/Models/Role.enum';


export enum Step {
  LOGIN='LOGIN',
  REGISTER='REGISTER'
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  step:Step = Step.LOGIN;

  constructor(private router:Router, private readonly authService:AuthService) {
  }

  goToRegisterListener() {
    this.step = Step.REGISTER
  }
  goToLoginListener() {
    this.step = Step.LOGIN
  }

  Login(event:{email:string,password:string}) {
   this.authService.Login(event.email,event.password).subscribe(user => {
    localStorage.setItem('userId', JSON.stringify(user.id));
    localStorage.setItem('userRole', JSON.stringify(user.role));
    if(user.role == Role.USER) {
      this.router.navigateByUrl('/user/user');
     }
     else if(user.role == Role.ADMIN ) {
      this.router.navigateByUrl('admin/users');
     }
   })
  }

  register(event:any) {
    this.authService.register(event.username,event.email,event.password,event.centerOfInterest).subscribe(user => {
        this.step = Step.LOGIN
    })
  }
}
