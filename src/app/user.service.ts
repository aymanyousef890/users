import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient ) { }

getUsers(num:Number):Observable<any>{
  return this._HttpClient.get(`https://reqres.in/api/users?page=${num}`)
}
getUserDetail(id:any):Observable<any>{
  return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
}



}
