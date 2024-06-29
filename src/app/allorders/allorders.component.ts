import { Component, OnInit } from '@angular/core';
import { Order} from '../order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent implements OnInit {

  listoforders:Array<Order>=[];

    constructor(public orderService:OrderService, public router:Router){} //DI is like backend admin service
    msg:string="";
    ngOnInit(): void {
        this.loadViewFoodOrder();
    }

    loadViewFoodOrder():void{
      this.orderService.viewAllOrder().subscribe({
        next:(result:any)=>{
          //console.log(result)
          this.listoforders=result;
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
