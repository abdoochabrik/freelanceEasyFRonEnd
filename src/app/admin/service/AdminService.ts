import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offer } from "src/app/shared/models/Offer.model";
import { BaseService } from "src/app/shared/services/base.service";
import { User } from "../Models/User.model";
import { ParentScraperService } from "src/app/shared/services/parent-scraper.service";


@Injectable()
export class AdminService extends BaseService {

    childScrapperBaseUrl = "http://localhost:8765/CHILD-SCRAPPER/api/child-scraper-controller"
    constructor(protected override readonly http:HttpClient){
      super(http);
    }

    /*public scrappOffers(centerOfInterest:string):Observable<Offer[]> {
      return this.http.get<Offer[]>(`${this.childScrapperBaseUrl}/${centerOfInterest}`);
    }*/

    public getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.baseUrl);
    }
}
