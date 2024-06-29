import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Roy} from './roy'
@Injectable({
  providedIn: 'root'
})
export class RoyService {
  baseUrl:string = "http://localhost:9090/food"
  //baseUrl:string = "http://52.86.201.221/food"
  constructor(public httpClient:HttpClient) { } // DI for HttpClient

  viewAllFoodItems():Observable<Roy[]> {
    return this.httpClient.get<Roy[]>(this.baseUrl+"/viewmenu")
  }
  
  findFoodItemById(fid:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/findfoodInfo"+"/"+fid)
  }

  addFoodItem(roy:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/addfood",roy,{responseType:"text"})
  }

  updateFoodItem(roy:any):Observable<string> {
    return this.httpClient.patch(this.baseUrl+"/updatefood"+"/"+roy.fid,roy,{responseType:"text"})
  }

  deleteFoodItem(fid:any):Observable<string> {
    return this.httpClient.delete(this.baseUrl+"/deletefood"+"/" + fid,{responseType:"text"})
  }
}
