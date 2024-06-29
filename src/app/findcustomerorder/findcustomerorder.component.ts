import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-findcustomerorder',
  templateUrl: './findcustomerorder.component.html',
  styleUrl: './findcustomerorder.component.css'
})
export class FindcustomerorderComponent implements OnInit{
  customerOrders:Array<Order>=[];
  msg:string="";

  findCustomerOrderRef = new FormGroup({
    contactno:new FormControl()
  })
  constructor(public orderService:OrderService){} 

  ngOnInit(): void {
    this.loadCustomerOrder();

    throw new Error('Method not implemented.');
  }
  findCustomerOrder():void{
    let getContactno = this.findCustomerOrderRef.value.contactno;

    this.orderService.findCustomerOrder(getContactno).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
    console.log("Find customer order done!")
      }
    });

    this.findCustomerOrderRef.reset();
    
  }
  loadCustomerOrder():void{
    this.orderService.findCustomerOrder(Order).subscribe({
      next:(result:any)=>{
        this.customerOrders=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("Listing customer order done!")
      }
    });
  }
  deleteFoodMenuItem():void{
    let customerorder = this.findCustomerOrderRef.value.contactno;

    this.orderService.findCustomerOrder(customerorder).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
    console.log("Customer order Found!")
      }
    });

    this.findCustomerOrderRef.reset();
    
  }

}
