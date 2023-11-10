import { Component } from '@angular/core';
import { User } from '../Models/User.model';
import { CenterOfInterest } from '../Models/CenterOfIneters.enum';
import { Role } from '../Models/Role.enum';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  sidebarVisible: boolean = false;
  users: User[] =  [
     {
      id:1,
      username:"chabrik1",
      email:"chabrik1@gmail.com",
      password:"n",
      centerOfInterest:CenterOfInterest.DATA,
      activateNotifications:true,
      role:Role.USER
     },
     {
      id:1,
      username:"chabrik1",
      email:"chabrik1@gmail.com",
      password:"n",
      centerOfInterest:CenterOfInterest.DATA,
      activateNotifications:true,
      role:Role.USER
     },
     {
      id:1,
      username:"chabrik1",
      email:"chabrik1@gmail.com",
      password:"n",
      centerOfInterest:CenterOfInterest.DATA,
      activateNotifications:true,
      role:Role.USER
     },
  ];

selectProduct(product:any) {
    console.log('event',product)
    this.sidebarVisible =true;
}
}
