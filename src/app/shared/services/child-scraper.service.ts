import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/Offer.model';

@Injectable({
  providedIn: 'root'
})
export class ChildScraperService {

  childScrapperBaseUrl = "http://localhost:8765/CHILD-SCRAPPER/api/child-scraper-controller"

  constructor(private readonly http:HttpClient) { }

  public scrappOffers(centerOfInterest:string):Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.childScrapperBaseUrl}/${centerOfInterest}`);
  }

}
