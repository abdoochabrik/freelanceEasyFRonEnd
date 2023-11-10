import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OffersComponent } from './offers/offers.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [{path:'user',component:MainComponent,
                        children:[
                          {path:'feedback',component:FeedbackComponent},
                          {path:'offers',component:OffersComponent},
                          {path:'account',component:AccountComponent}
                        ]},
                        {path:'**',redirectTo:'user'}
                       ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {}
