import { Component, OnInit } from '@angular/core';
import { Myorder } from '../myorder';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Roy } from '../roy';

@Component({
  selector: 'app-viewmyorder',
  templateUrl: './viewmyorder.component.html',
  styleUrl: './viewmyorder.component.css'
})
export class ViewmyorderComponent implements OnInit {
  myorderlist:Array<Myorder>=[];


  constructor(public orderSerive:OrderService, public roy:Roy, public router:Router){} //DI is like backend admin service
  msg:string="";

  ngOnInit(): void {
      this.myOrders();
      
  }

  myOrders():void{
    this.orderSerive.findmyOrder(this.roy.fid).subscribe({
      next:(result:any)=>{
        this.myorderlist=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("My order listing done!")
        
        
        
      }
    });
    
   
  }


}
