import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { User } from "../../Models/User.model";


@Component({
  selector:'side-bar',
  templateUrl:'./SideBarComponent.component.html'
})
export class SideBarComponent implements OnInit,OnDestroy {


  @Input() user!:User;
  @Output() hideSideBarEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();

  sidebarVisible!:boolean;

  ngOnInit(): void {
    this.sidebarVisible = true;
  }

  ngOnDestroy(): void {
    this.sidebarVisible = false
  }

  hide() {
    this.hideSideBarEvent.emit();
    this.ngOnDestroy()
  }

  updateUser() {
    this.sidebarVisible = false;
    this.updateUserEvent.emit(this.user)
  }

}
