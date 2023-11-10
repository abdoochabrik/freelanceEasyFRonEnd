import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  isWebOffersLoading:boolean = false;
  isDataOffersLoading:boolean = false;
  isSecurityOffersLoading:boolean = false;

  constructor() {

  }

  search(event:string) {
      switch(event) {
        case 'web':
          this.isWebOffersLoading=true;
          break;
        case 'data':
          this.isDataOffersLoading = true;
          break;
        case 'security':
          this.isSecurityOffersLoading = true;
          break
      }
  }
}
