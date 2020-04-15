import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingpagemenuComponent } from './landingpagemenu/landingpagemenu.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantSignupComponent } from './restaurant-signup/restaurant-signup.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { LoginComponent } from './login/login.component';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { HomerestaurantComponent } from './homerestaurant/homerestaurant.component';
import { OrderComponent } from './order/order.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingpagemenuComponent,
    FooterComponent,
    RestaurantSignupComponent,
    CustomerSignupComponent,
    LoginComponent,
    AddnewitemComponent,
    ViewOrdersComponent,
    ContactusComponent,
    RestaurantMenuComponent,
    CustomerMenuComponent,
    LogoutComponent,
    HomeComponent,
    HomerestaurantComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
