import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import { User } from "../admin/Models/User.model";
import { Role } from "../admin/Models/Role.enum";

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private readonly router:Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
      const data:string|null = localStorage?.getItem('user');
      let canload:boolean = false;
      if(data){
        const user:User =  JSON.parse(data);
        canload =  user.role == Role.ADMIN;
      }
      if(canload) {
        return true
      }
      this.router.navigateByUrl('/auth')
      return false;

  }
}
