import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SignupComponent } from './signup/signup.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  {path:'',component:LoginComponent},

  {path:'home',component:HomeComponent},
  {path:'orders',component:UserOrdersComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userDetails',component:UserComponent,canActivate:[AuthGuard]},
  {path:'product',component:ProductCardComponent,canActivate:[AuthGuard]},
  {path:'about-us',component:AboutUsComponent,canActivate:[AuthGuard]},
  {path:'contact-us',component:ContactUsComponent,canActivate:[AuthGuard]},
  {path:'forgetPassword',component:ForgetPasswordComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
