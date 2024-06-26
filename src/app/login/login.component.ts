import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })
    constructor(public loginService:LoginService, public router:Router){} //DI for backend login service
    msg:string="";
    ngOnInit(): void {
        
    }

    signIn():void{
      let login = this.loginRef.value;
      console.log(login);
      //call backend LoginService method using subscribe, a pre-defined method
      // this.loginService.signUp(login).subscribe({
      //   next: (result: any) => {
      //     // Handle the result of the sign-up operation
      //     this.msg = result;
      //   },
      //   error: (error: any) => {
      //     // Handle errors that occur during sign-up
      //     console.log(error);
      //   },
      //   complete: () => {
      //     // This will be executed when the sign-up process completes successfully
      //     console.log("signin done!");
      //   }
      // });
      this.loginService.signIn(login).subscribe({
        next:(result:any)=>{
          //console.log(result)
          if(result=="Admin login successfull!"){
              this.router.navigate(["admin"])
          }else if(result=="Customer login successfull!"){
            sessionStorage.setItem("username",login.emailid);
            this.router.navigate(["customer"],{skipLocationChange:true})
          }else{
            this.msg=result;
          }
          
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