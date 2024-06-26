import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent implements OnInit{

  restaurantRef = new FormGroup({
    restaurant:new FormControl()
  })
    constructor(public router:Router){} //DI for backend login service
    msg:string="";
    logout():void{
      this.router.navigate(["login"]) //], {skipLocationChange:true})
    }
    ngOnInit(): void {
        
    }

    search():void{
      let res:any = this.restaurantRef.value;
      console.log(res);
      if(res){
        this.router.navigate(["eucharia-food"])
    }
  }
}