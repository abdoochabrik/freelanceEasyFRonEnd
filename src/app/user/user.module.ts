import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UserService } from './services/user-service.service';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { AccountComponent } from './account/account.component';
import { OffersComponent } from './offers/offers.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OfferComponent } from './offers/offer/offer.component';

@NgModule({
  declarations: [
    MainComponent,
    LeftSideComponent,
    RightSideComponent,
    AccountComponent,
    OffersComponent,
    FeedbackComponent,
    OfferComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CardModule,
    ProgressSpinnerModule,
    TableModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    InputSwitchModule
  ],
  providers: [UserService]
})
export class UserModule { }
