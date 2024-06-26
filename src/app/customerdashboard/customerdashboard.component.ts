import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrl: './customerdashboard.component.css'
})
export class CustomerdashboardComponent implements OnInit {
  emailid:string ="";
  constructor(public router:Router){}
  ngOnInit(): void{
    let obj = sessionStorage.getItem("username");
    if(obj!=null){
      this.emailid=obj;
    }
  }
  logout():void{
    this.router.navigate(["login"]) 
  }



}