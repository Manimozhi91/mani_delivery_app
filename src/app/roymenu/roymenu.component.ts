import { Component, OnInit } from '@angular/core';
import { Roy } from '../roy';
import { Order } from '../order';
import { RoyService } from '../roy.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roymenu',
  templateUrl: './roymenu.component.html',
  styleUrl: './roymenu.component.css'
})
export class RoymenuComponent implements OnInit{
  roy:Array<Roy>=[];
foodOrderList:Array<Order>=[];
customerOrderRef = new FormGroup({
  fid: new FormControl(),
  cname: new FormControl(),
  contactno: new FormControl(),
  location: new FormControl(),
  qty: new FormControl(),
  price: new FormControl(),
  status: new FormControl(),
  })

constructor(public royService:RoyService, public orderSerive:OrderService, public router:Router){} //DI is like fid: any, any?: anyy, any: anyadmin service
msg:string="";
  ngOnInit(): void {
    this.loadMenu();
    throw new Error('Method not implemented.');
  }
  loadMenu():void{
    this.royService.viewAllFoodItems().subscribe({
      next:(result:any)=>{
        //console.log(result)
        this.roy=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("Menu's")
        
        
        
      }
    });
    
  }
  openOrderForm(){
    const modelDiv = document.getElementById('exampleModal');
    if(modelDiv != null)
    modelDiv.style.display="block";
  }

  closeOrderForm(){
    const modelDiv = document.getElementById('exampleModal');
    if(modelDiv != null)
    modelDiv.style.display="none";
  }
  deleteFoodMenuItem(fid:any):void{
    this.royService.deleteFoodItem(fid).subscribe({
      next:(result:any)=>{
        //console.log(result)
       // alert(fid);
        this.roy=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("Delete food menu item done!")
        this.loadMenu()
      }
    });
  }

  updateFoodMenuItem(roy:any):void{

  }

  placeOrder():void{
    let order = this.customerOrderRef.value;

    this.orderSerive.placeOrder(order).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
    console.log("Order Placed!")
      }
    });

    this.customerOrderRef.reset();
    
  }

  getCustomerOrderInfo(foodOrderList: any): void {
    this.customerOrderRef.get("fid")?.setValue(foodOrderList.fid);
    this.customerOrderRef.get("cname")?.setValue(foodOrderList.cname);
    this.customerOrderRef.get("contactno")?.setValue(foodOrderList.contactno);
    this.customerOrderRef.get("location")?.setValue(foodOrderList.location);
    this.customerOrderRef.get("price")?.setValue(foodOrderList.price);
    this.customerOrderRef.get("status")?.setValue(foodOrderList.status);
    }
  

}
