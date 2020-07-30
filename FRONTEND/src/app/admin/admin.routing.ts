import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditComponent } from './components/edit/edit.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';

const routes: Routes = [
    {
        path:'admin',
        component:AdminComponent,
        children:[
            { path:'home' , component:HomeComponent},
            { path:'product' , component:ProductListComponent},
            { path:"add" , component:NewProductComponent},
            { path:'edit/:p_id',component:EditComponent},
            { path:'contact' , component:ContactUsComponent},
            { path:"cart" ,component:CartComponent},
            { path:"login" ,component:LoginComponent},
            { path:"register" ,component:RegisterComponent}

        ]
    }] ;

export const AdminRouting = RouterModule.forRoot(routes);