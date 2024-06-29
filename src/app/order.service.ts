import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl:string = "http://localhost:9090/orders"
 // baseUrl:string = "http://52.86.201.221/orders"
  constructor(public httpClient:HttpClient) { } // DI for HttpClient
  //by default all method of httpcClient return type is json but if we return from backend as string, you use response as text

  viewAllOrder():Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl+"/viewallorders")
  }
  
  findOrder(fid:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/viewmyorder"+"/"+1)
  }

  placeOrder(order:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/placeorder",order,{responseType:"text"})
  }

  updateOrder(order:any):Observable<string> {
    return this.httpClient.patch(this.baseUrl+"/updateorder"+"/"+order.oid,order,{responseType:"text"})
  }

  deleteOrder(oid:any):Observable<string> {
    return this.httpClient.delete(this.baseUrl+"/deleteorder"+"/" + oid,{responseType:"text"})
  }

  findmyOrder(fid:any):Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl+"/viewmyorder"+"/"+fid)
  }

  findCustomerOrder(contactno:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/findcustomerorder"+"/"+contactno)
  }

  cancelCustomerOrder(contactno:number):Observable<any> {
    return this.httpClient.delete(this.baseUrl+"/cancelorder"+"/"+contactno,{responseType:"text"})
  }

}
