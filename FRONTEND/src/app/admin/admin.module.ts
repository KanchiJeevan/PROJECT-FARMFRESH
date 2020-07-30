import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditComponent } from './components/edit/edit.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './components/product-list/product.service'
import { CartService } from "./components/cart/cart.service";
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { AuthGuard } from './auth.guard'

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    ContactUsComponent,
    ProductListComponent,
    NewProductComponent,
    EditComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AdminRouting
  ],
providers: [ProductService,CartService,AuthGuard],

})
export class AdminModule { }