import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/admin/Models/User.model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user!:User
  isLoaded:boolean = false;

  constructor(private  readonly userService:UserService) {

  }

  ngOnInit(): void {
     const result:string|null  = localStorage.getItem("user");
     if(result) {
      const user:User = JSON.parse(result);
      this.userService.getUserById(user.id).subscribe(user =>
        this.user = user,
     )
      this.isLoaded = true;
     }
  }

  ngOnDestroy(): void {
      console.log('unsubscribe');
  }

  updateAccount() {
    const dto = {
      username:this.user.username,
      email:this.user.email,
      password:this.user.password,
      centerOfInterest:this.user.centerOfInterest,
      activateNotifications:this.user.activateNotifications,
    }

    this.userService.updateUser(dto,this.user.id).subscribe((user) => {
      console.log("user updated",user)
     })
  }

}
