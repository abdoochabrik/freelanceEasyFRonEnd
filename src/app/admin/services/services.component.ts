import { Component } from '@angular/core';
import { AdminService } from '../service/AdminService';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/shared/models/Offer.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  isWebOffersLoading:boolean = false;
  isDataOffersLoading:boolean = false;
  isSecurityOffersLoading:boolean = false;

  constructor(private readonly adminService:AdminService) {
  }

  search(event:string) {
      switch(event) {
        case 'web':
          this.isWebOffersLoading=true;
          this.getOffers('web').subscribe((offers) => {
            this.isWebOffersLoading = false;
          })
          break;
        case 'data':
          this.isDataOffersLoading = true;
          this.getOffers('data').subscribe((offers) => {
            this.isDataOffersLoading= false;
          })
          break;
        case 'security':
          this.isSecurityOffersLoading = true;
          this.getOffers('security').subscribe((offers) => {
            this.isSecurityOffersLoading = false;
          })
          break
      }
  }

 private getOffers(centerOfInterest:string):Observable<Offer[]> {
    return this.adminService.scrappOffers(centerOfInterest)
  }
}
