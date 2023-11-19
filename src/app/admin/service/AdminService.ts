import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offer } from "src/app/shared/models/Offer.model";
import { BaseService } from "src/app/shared/services/base.service";


@Injectable()
export class AdminService extends BaseService {

    //private Url:string = "http://localhost:8081/api/v1/users localhost:8083/api/child-scraper-controller/";

    constructor(protected override readonly http:HttpClient){
      super(http);
    }

    public scrappOffers(centerOfInterest:string):Observable<Offer[]> {
      return this.http.get<Offer[]>(`http://localhost:8083/api/child-scraper-controller/${centerOfInterest}`);
    }
}
