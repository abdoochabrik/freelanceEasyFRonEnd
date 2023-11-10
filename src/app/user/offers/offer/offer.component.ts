import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/shared/models/Offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  @Input() offer!:Offer;

  seeMore(event:string) {
    window.open(event);
  }

}
