import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminaddmenuComponent } from './adminaddmenu/adminaddmenu.component';
import { AdmindeletemenuComponent } from './admindeletemenu/admindeletemenu.component';
import { AdminupdatemenuComponent } from './adminupdatemenu/adminupdatemenu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AllordersComponent } from './allorders/allorders.component';
import { OrderComponent } from './order/order.component';
import { RoyrestaurantComponent } from './royrestaurant/royrestaurant.component';
import { RoymenuComponent } from './roymenu/roymenu.component';
import { RoyfinditemComponent } from './royfinditem/royfinditem.component';
import { FindcustomerorderComponent } from './findcustomerorder/findcustomerorder.component';
import { ViewmyorderComponent } from './viewmyorder/viewmyorder.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerdashboardComponent,
    AdmindashboardComponent,
    SignupComponent,
    LoginComponent,
    AdminaddmenuComponent,
    AdmindeletemenuComponent,
    AdminupdatemenuComponent,
    RestaurantsComponent,
    AllordersComponent,
    OrderComponent,
    RoyrestaurantComponent,
    RoymenuComponent,
    RoyfinditemComponent,
    FindcustomerorderComponent,
    ViewmyorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule

  ],
  providers: [  provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
