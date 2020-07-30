import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';


const routes: Routes = [
    {
        path:'user',
        component:UserComponent,
        children:[
            { path:'' , component:HomeComponent},
            { path:'home' , component:HomeComponent},
            { path:'product' , component:ProductListComponent},
            { path:'contact' , component:ContactUsComponent},
            { path:"cart" ,component:CartComponent},
            { path:"login" ,component:LoginComponent},
            { path:"register" ,component:RegisterComponent}

        ]
    }] ;

export const UserRouting = RouterModule.forRoot(routes);