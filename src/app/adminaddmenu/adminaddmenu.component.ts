import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminaddmenu',
  templateUrl: './adminaddmenu.component.html',
  styleUrl: './adminaddmenu.component.css'
})
export class AdminaddmenuComponent implements OnInit{
 additemRef= new FormGroup({
  fid : new FormControl(),
  foodname : new FormControl(),
  description: new FormControl(),
  image: new FormControl(),
  price :new FormControl()
 })
 constructor(public adminService:AdminService){} 
 msg:string="";
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addMenu():void{
    let item = this.additemRef.value;
    this.adminService.addFood(item).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("Add Food Item done!")
        }
      });
      this.additemRef.reset();
  }
}
