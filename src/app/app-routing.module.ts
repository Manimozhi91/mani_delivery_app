import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { AdminaddmenuComponent } from './adminaddmenu/adminaddmenu.component';
import { AdmindeletemenuComponent } from './admindeletemenu/admindeletemenu.component';
import { AllordersComponent } from './allorders/allorders.component';
import { AdminupdatemenuComponent } from './adminupdatemenu/adminupdatemenu.component';
import { RoymenuComponent } from './roymenu/roymenu.component';
import { OrderComponent } from './order/order.component';
import { ViewmyorderComponent } from './viewmyorder/viewmyorder.component';
import { FindcustomerorderComponent } from './findcustomerorder/findcustomerorder.component';

const routes: Routes = [    {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin",component:AdmindashboardComponent,
 children:[
    {path:"addfooditem",component:AdminaddmenuComponent},
    {path:"updatefooditem",component:AdminupdatemenuComponent},
    {path:"allcustomerorders",component:AllordersComponent},
    {path:"foodmenu",component:RoymenuComponent},
    {path:"deletefooditem",component:AdmindeletemenuComponent},
   {path:"customer",component:CustomerdashboardComponent},//,children:[
  //   {path:"roy",component:OrderComponent},
  // ]},
]},
{path:"customer",component:CustomerdashboardComponent,children:[
  {path:"roy",component:OrderComponent},
 
  {path:"viewmyorder",component:ViewmyorderComponent},
]},
{path:"findcustomerorder",component:FindcustomerorderComponent},
{path:"allcustomerorders",component:AllordersComponent},
  {path:"",redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
