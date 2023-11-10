import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { CenterOfInterest } from "src/app/admin/Models/CenterOfIneters.enum";
import { Role } from "src/app/admin/Models/Role.enum";
import { User } from "src/app/admin/Models/User.model";

@Injectable({ providedIn: 'root' })
export class AuthService {

  baseUrl:string = "http://localhost:8081/api/v1/users";
  constructor(private http:HttpClient) {
  }

  Login(email: string, password: string): Observable<User> {
    const user = this.http.post<User>(`${this.baseUrl}/login`,{
      "email":email,
      "password":password,
    }).pipe(
      retry(3),
      catchError(this.handleError)
    )
    //localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  register(username:string,email:string,password:string,centerOfInterest:CenterOfInterest) : Observable<User> {
      return this.http.post<User>(`${this.baseUrl}/register`,{
          "username":username,
          "email":email,
          "password":password,
          "centerOfInterest":centerOfInterest
      }).pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
