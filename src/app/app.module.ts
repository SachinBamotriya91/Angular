import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StoreComponent } from './store/store.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { FilterPipe } from './shared/filter.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { UserComponent } from './user/user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge'; 

import {MatInputModule} from '@angular/material/input'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ProductCardComponent,
    StoreComponent,
    UserOrdersComponent,
    FilterPipe,
    AboutUsComponent,
    ContactUsComponent,
    UserComponent,
    ForgetPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  ,
    FormsModule  ,
    BsDatepickerModule.forRoot(),
    BsDropdownModule,
    ModalModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule
  ],

  providers: [BsDatepickerConfig, BsDropdownConfig,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
