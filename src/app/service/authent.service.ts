import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  constructor(private http:HttpClient) { }

  GetUser(){
   return this.http.get("http://localhost:63338/api/users");
  }
  PostUser(){

  }
  UpdateUser(){

  }
  DeleteUser(){

  }
}
