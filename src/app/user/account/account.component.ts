import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/admin/Models/User.model';
import { UserService } from '../services/user-service.service';
import { CenterOfInterest } from 'src/app/shared/enums/CenterOfInterest';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit,OnDestroy {

  public user!:User
  isLoaded:boolean = false;

 /* centersOfInterest:any[] = [{label:"web Development",value:CenterOfInterest.WEB},
  {label:"Cyber security",value:CenterOfInterest.SECURITY},
  {label:"Data engineering",value:CenterOfInterest.DATA}
 ]*/

 centersOfInterest:any[] = [CenterOfInterest.WEB,CenterOfInterest.SECURITY,CenterOfInterest.DATA]
  constructor(private  readonly userService:UserService) { }

  ngOnInit(): void {
     const result:string|null  = localStorage.getItem("userId");
     if(result) {
      const userId:number = JSON.parse(result);
      this.userService.getUserById(userId).subscribe((user) => {
        this.user = user,
        this.isLoaded = true
      }
     )
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

    this.userService.updateUser(dto,this.user.id).subscribe((user) => {
      console.log("user updated",user)
     })
  }
}
