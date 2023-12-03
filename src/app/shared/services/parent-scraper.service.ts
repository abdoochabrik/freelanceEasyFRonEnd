import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../models/Offer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentScraperService {

  private readonly parentScrapperBaseUrl = "http://localhost:8765/PARENT-SCRAPER/parent-scraper-controller"

  constructor(private readonly http:HttpClient) { }

  public getOffers(centerOfInterest:string):Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.parentScrapperBaseUrl}/${centerOfInterest}`);
  }
}
