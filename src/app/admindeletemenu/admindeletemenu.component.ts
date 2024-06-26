import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admindeletemenu',
  templateUrl: './admindeletemenu.component.html',
  styleUrl: './admindeletemenu.component.css'
})
export class AdmindeletemenuComponent implements OnInit{
  deleteMenuRef = new FormGroup({
    fid:new FormControl()
  })
  constructor(public adminService:AdminService){} 
  msg:string="";
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deleteItem():void{
    let deleteitem =this.deleteMenuRef.value.fid;
    this.adminService.deleteFood(deleteitem).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
    console.log("Delete Food Item done!")
      }
    });
    this.deleteMenuRef.reset();
  }
 

}
