import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { ServicesComponent } from './services/services.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'',component:MainComponent, children: [
    {path:'users',component:UsersListComponent},
    {path:'services',component:ServicesComponent},
    {path:'account',component:AccountComponent},
    {path:'**',redirectTo:'users'}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
