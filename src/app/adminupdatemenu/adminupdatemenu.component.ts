import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminupdatemenu',
  templateUrl: './adminupdatemenu.component.html',
  styleUrl: './adminupdatemenu.component.css'
})
export class AdminupdatemenuComponent implements OnInit{
  updateitemRef = new FormGroup({
    fid:new FormControl(),
    foodname:new FormControl(),
    description:new FormControl(),
    image:new FormControl(),
    price:new FormControl()
  })
  constructor(public adminService:AdminService){} 
  msg:string="";

  updateMenu():void{
    let fooditemdetails = this.updateitemRef.value;

    this.adminService.updateFood(fooditemdetails).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
    console.log("Update Food Item done!")
      }
    });

    this.updateitemRef.reset();
    
  }
  update(fooditemdetails:any):void{
    this.updateitemRef.get("fid")?.setValue(fooditemdetails.fid);
    this.updateitemRef.get("foodname")?.setValue(fooditemdetails.foodname);
    this.updateitemRef.get("description")?.setValue(fooditemdetails.description);
    this.updateitemRef.get("image")?.setValue(fooditemdetails.image);
    this.updateitemRef.get("price")?.setValue(fooditemdetails.price);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
