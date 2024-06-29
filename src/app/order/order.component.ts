import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoyService } from '../roy.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Roy } from '../roy';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  customerOrderRef = new FormGroup({
    fid: new FormControl(),
    cname: new FormControl(),
    contactno: new FormControl(),
    location: new FormControl(),
    qty: new FormControl(),
    price: new FormControl()
    })
    constructor(public royService:RoyService, public orderService:OrderService, public router:Router){} 
    msg:string="";
    ngOnInit(): void {
      this.viewMenu(); 
      this.viewOrder()
  }
  roymenuList:Array<Roy>=[];
  orderList:Array<Order>=[];
  myOrders:Array<Order>=[];
viewMenu():void{
  this.royService.viewAllFoodItems().subscribe({
    next:(result:any)=>{
      this.roymenuList=result;
    },
    error:(err:any)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("Menu")
    }
  });

}

placeOrder():void{
  let order=this.customerOrderRef.value;
  this.orderService.placeOrder(order).subscribe({
    next:(result:any)=>{
      this.msg=result;
    },
    error:(err:any)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("Order Placed")
    }
  });
this.customerOrderRef.reset();

    
}
getOrder(roy:Roy){
     
  this.customerOrderRef.get("fid")?.setValue(roy.fid);
  this.customerOrderRef.get("price")?.setValue(roy.price);

}
viewOrder():void{

  this.orderService.viewAllOrder().subscribe({
    next:(result:any)=>{
      //console.log(result)
      this.myOrders=result;
    },
    error:(error:any)=>{
      console.log(error)
    },
    complete:()=>{
      console.log("list of orders done!")
    }
  });
}
}
