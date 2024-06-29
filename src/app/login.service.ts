import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string = "http://localhost:9090/login"
  //baseUrl:string = "http://54.82.133.161/login"
  constructor(public httpClient:HttpClient) { } // DI for HttpClient
  //by default all method of httpcClient return type is json but if we return from backend as string, you use response as text

  signUp(login:any):Observable<string> {
   // console.log("*******************"+this.httpClient.post(this.baseUrl+"/signup",login,{responseType:"text"}));
    return this.httpClient.post(this.baseUrl+"/signup",login,{responseType:"text"})
  }

  signIn(login:any):Observable<string> {
   // console.log("*******************"+this.httpClient.post(this.baseUrl+"/signin",login,{responseType:"text"}).);

    return this.httpClient.post(this.baseUrl+"/signin",login,{responseType:"text"})
  }
}