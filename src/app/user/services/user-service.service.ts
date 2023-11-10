import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/shared/models/Offer.model';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(protected override readonly http:HttpClient) {
    super(http);
  }

  public getOffers(centerOfInterest:string):Observable<Offer[]> {
    return this.http.get<Offer[]>(`http://localhost:8080/parent-scraper-controller/${centerOfInterest}`);
  }

}
