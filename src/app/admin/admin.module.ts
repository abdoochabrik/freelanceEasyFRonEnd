import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { ServicesComponent } from './services/services.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightSideComponent } from './right-side/right-side.component';
import { AccountComponent } from './account/account.component';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './service/AdminService';
import { BaseService } from '../shared/services/base.service';

@NgModule({
  declarations: [
    UsersListComponent,
    ServicesComponent,
    MainComponent,
    LeftMenuComponent,
    RightSideComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CardModule,
    ProgressSpinnerModule,
    TableModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    SidebarModule,
    SharedModule
  ],
  providers:[AdminService,BaseService],
  exports:[AccountComponent]
})
export class AdminModule { }
