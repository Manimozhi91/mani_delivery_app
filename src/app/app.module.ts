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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule

  ],
  providers: [  provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
