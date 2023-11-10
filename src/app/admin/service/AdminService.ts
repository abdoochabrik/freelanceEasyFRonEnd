import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "src/app/shared/services/base.service";


@Injectable()
export class AdminService extends BaseService {

    constructor(protected override readonly http:HttpClient){
      super(http);
    }

}
