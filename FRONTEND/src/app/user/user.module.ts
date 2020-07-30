import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRouting } from './user.routing';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './components/product-list/product.service'
import { CartService } from "./components/cart/cart.service";
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { AuthGuard } from './auth.guard'

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    ContactUsComponent,
    ProductListComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRouting
  ],
providers: [ProductService,CartService,AuthGuard],

})
export class UserModule { }