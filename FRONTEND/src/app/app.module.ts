import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { routing } from './app.routing';
import { AppComponent } from './app.component'; 
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    FormsModule,
    HttpClientModule,
    UserModule,
    AdminModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
