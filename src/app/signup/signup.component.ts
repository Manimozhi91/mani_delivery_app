import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })
    constructor(public loginService:LoginService){} //DI for backend login service
    msg:string="";
    ngOnInit(): void {
        
    }

    signUp():void{
      let login = this.loginRef.value;
      //console.log(login);
      //call backend LoginService method using subscribe, a pre-defined method
      this.loginService.signUp(login).subscribe({
        next:(result:any)=>{
          console.log(result)
          this.msg=result;
        },
        error:(error:any)=>{
          console.log(error)
        },
        complete:()=>{
      console.log("signin done!")
        }
      });

      this.loginRef.reset();
      
    }

}