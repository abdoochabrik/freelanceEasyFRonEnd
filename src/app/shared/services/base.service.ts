import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/admin/Models/User.model';
import { UpdateUserDto } from '../Dto/updateUserDto';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected baseUrl:string = "http://localhost:8765/USER/api/v1/users";

  constructor(protected readonly http:HttpClient) { }

  public getUserById(id:number):Observable<User> {
     return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

  public updateUser(updateUserDto:UpdateUserDto, id:number):Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${id}`,updateUserDto);
  }

  public deleteUser(id:string):Observable<Boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`)
  }

}
