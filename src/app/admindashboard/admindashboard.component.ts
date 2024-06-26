import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit {

  emailid:string ="";
  constructor(public router:Router){}
  ngOnInit(): void{
 
  }
  logout():void{
    this.router.navigate(["login"]) //], {skipLocationChange:true})
  }
}