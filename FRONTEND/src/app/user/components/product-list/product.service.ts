import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http:HttpClient) { }
  
  getProducts(){
    return this.http.get("http://localhost:3000/products");
   
  }

  //SIGNUP AND LOGIN 
  registerUser(user){
    return this.http.post(this._registerUrl , user)
  }
  loginUser(user){
    return this.http.post(this._loginUrl , user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

}


