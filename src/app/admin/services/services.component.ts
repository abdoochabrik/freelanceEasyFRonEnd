import { Component } from '@angular/core';
import { AdminService } from '../service/AdminService';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/shared/models/Offer.model';
import { ChildScraperService } from 'src/app/shared/services/child-scraper.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  isWebOffersLoading:boolean = false;
  isDataOffersLoading:boolean = false;
  isSecurityOffersLoading:boolean = false;

  constructor(private readonly childScrapperService:ChildScraperService) {
  }

  search(event:string) {
      switch(event) {
        case 'web':
          this.isWebOffersLoading=true;
          this.getOffers('web').subscribe((offers) => {
            this.isWebOffersLoading = false;
          })
          //temporary solution
          //TODO: handle backend exception
          setTimeout(() => {
            this.isWebOffersLoading = false;
          }, 3000)
          break;
        case 'data':
          this.isDataOffersLoading = true;
          this.getOffers('data').subscribe((offers) => {
            this.isDataOffersLoading= false;
          })
           //temporary solution
          //TODO: handle backend exception
          setTimeout(() => {
            this.isDataOffersLoading= false;
          }, 3000)
          break;
        case 'security':
          this.isSecurityOffersLoading = true;
          this.getOffers('security').subscribe((offers) => {
            this.isSecurityOffersLoading = false;
          })
           //temporary solution
          //TODO: handle backend exception
          setTimeout(() => {
            this.isSecurityOffersLoading = false;
          }, 3000)
          break
      }
  }

 private getOffers(centerOfInterest:string):Observable<Offer[]> {
    return this.childScrapperService.scrappOffers(centerOfInterest)
  }
}
