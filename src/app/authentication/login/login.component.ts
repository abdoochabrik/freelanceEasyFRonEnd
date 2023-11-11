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

}
