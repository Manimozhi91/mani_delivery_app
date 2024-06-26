import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 //baseUrl:string = "http://localhost:9090/food"
 baseUrl:string = "http://54.82.133.161/food"
 constructor(public httpClient:HttpClient) { } // DI for HttpClient

 addFood(item:any):Observable<string> {
   return this.httpClient.post(this.baseUrl+"/addfood",item,{responseType:"text"})
 }

 updateFood(item:any):Observable<string> {
   return this.httpClient.patch(this.baseUrl+"/updatefood",item,{responseType:"text"})
 }

 deleteFood(item:any):Observable<string> {
   return this.httpClient.delete(this.baseUrl+"/deletefood"+item,{responseType:"text"})
 }
 
}
