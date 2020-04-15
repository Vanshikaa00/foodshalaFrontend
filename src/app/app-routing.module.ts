import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CustomerSignupComponent} from './customer-signup/customer-signup.component';
import {RestaurantSignupComponent} from './restaurant-signup/restaurant-signup.component';
import {HomeComponent} from './home/home.component';
import {HomerestaurantComponent} from './homerestaurant/homerestaurant.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AddnewitemComponent} from './addnewitem/addnewitem.component';
import {OrderComponent} from './order/order.component';
import {ContactusComponent} from './contactus/contactus.component';
import {FooterComponent} from './footer/footer.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewOrdersComponent} from './view-orders/view-orders.component';
import {CustomerMenuComponent} from './customer-menu/customer-menu.component';
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {LandingpagemenuComponent} from './landingpagemenu/landingpagemenu.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'custsignup',
    component: CustomerSignupComponent,
  },
  {
    path: 'restsignup',
    component: RestaurantSignupComponent,
  },
  {
    path : 'custhome',
    component: HomeComponent,
  },
  {
    path: 'resthome',
    component: HomerestaurantComponent,
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'custnavbar',
    component: CustomerMenuComponent,
  },
  {
    path: 'restnavbar',
    component: RestaurantMenuComponent,
  },
  {
    path: 'landingnavbar',
    component: LandingpagemenuComponent,
  },
  {
    path: 'additem',
    component: AddnewitemComponent,
  },
  {
    path: 'orderplaced',
    component: OrderComponent,
  },
  {
    path: 'vieworder',
    component: ViewOrdersComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
