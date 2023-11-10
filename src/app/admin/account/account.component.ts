import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../service/AdminService';
import { User } from '../Models/User.model';
import { CenterOfInterest } from 'src/app/shared/enums/CenterOfInterest';
import { Role } from '../Models/Role.enum';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit,OnDestroy {

  public user!:User
  isLoaded:boolean = false;

  constructor(private  readonly adminService:AdminService) {

  }

  ngOnInit(): void {
     const result:string|null  = localStorage.getItem("user");
     if(result) {
      const user:User = JSON.parse(result);
      this.adminService.getUserById(user.id).subscribe(user =>
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
    }

    this.adminService.updateUser(dto,this.user.id).subscribe((user) => {
      console.log("user updated",user)
     })
  }
}
