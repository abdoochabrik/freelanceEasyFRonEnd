import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/admin/Models/User.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public userId!:number;
  isLoaded:boolean = false;

  constructor(private  readonly userService:UserService) {
  }

  ngOnInit(): void {
     const data:string|null  = localStorage.getItem("userId");
     if(data) {
      this.userId = JSON.parse(data);
     }
  }

  ngOnDestroy(): void {
      console.log('unsubscribe');
  }
}
