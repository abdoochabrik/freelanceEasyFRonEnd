import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User.model';
import { AdminService } from '../service/AdminService';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private readonly adminService:AdminService){}

  sidebarVisible: boolean = false;
  selctedUser!:User;
  isLoading:boolean = true;
  users!: User[]

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(users => {
      this.users = [...users];
      this.isLoading = false;
    })
  }
  selectUser(user:any) {
    this.selctedUser = user
    this.sidebarVisible =true;
  }

  hideSideBarListner() {
    this.sidebarVisible = false
  }

  updateUserListener(event:User) {
    this.sidebarVisible = false
    this.isLoading = true
    const Dto = {
      username:event.username,
      activateNotifications:event.activateNotifications
    }
     this.adminService.updateUser(Dto,event.id).subscribe(user => {
        this.isLoading = false;
     })
  }
}
