import { Component } from '@angular/core';
import { Roy } from '../roy';
import { RoyService } from '../roy.service';

@Component({
  selector: 'app-royrestaurant',
  templateUrl: './royrestaurant.component.html',
  styleUrl: './royrestaurant.component.css'
})
export class RoyrestaurantComponent {
  roy:Array<Roy>=[];
  constructor(public royService:RoyService){}
  viewFoodMenu():void{
      this.royService.viewAllFoodItems().subscribe({
          next:(data:any)=>{
              this.roy=data;
          },
          error:(error:any)=>{
              console.log(error);
          },
          complete:()=>{
              console.log("Roy's Menu ");
          }
      })
  }

}
