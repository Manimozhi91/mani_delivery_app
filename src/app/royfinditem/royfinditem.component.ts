import { Component, OnInit } from '@angular/core';
import { Roy } from '../roy';
import { FormControl, FormGroup } from '@angular/forms';
import { RoyService } from '../roy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-royfinditem',
  templateUrl: './royfinditem.component.html',
  styleUrl: './royfinditem.component.css'
})
export class RoyfinditemComponent implements OnInit{

  roy:Array<Roy>=[];
  findfooditemRef = new FormGroup({
    fid:new FormControl()
  })
  msg:string="";

  constructor(public royService:RoyService, roy:Roy, public router:Router){} //DI is like backend admin service

  ngOnInit(): void {
    this.viewMenu()

    throw new Error('Method not implemented.');
  }
  findItem():void{
    let finditem = this.findfooditemRef.value.fid;

    this.royService.findFoodItemById(finditem).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
    console.log("Food item Found")
      }
    });

    this.findfooditemRef.reset();
    
  }
  viewMenu():void{
      
  }

}
