import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from 'src/app/admin/Models/User.model';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  @Input() userId!:number;

  public user!:User;
  isLoaded:boolean = false;

  constructor(private  readonly userService:UserService){}

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe(user =>{
      this.user = user
      this.isLoaded = true
    }
   )
  }

}
