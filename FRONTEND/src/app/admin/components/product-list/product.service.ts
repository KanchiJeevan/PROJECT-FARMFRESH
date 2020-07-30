import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private _registerAdminUrl = "http://localhost:3000/adminRegister"
  private _loginAdminUrl = "http://localhost:3000/adminLogin"

  constructor(private http:HttpClient) { }
  
  getProducts(){
    return this.http.get("http://localhost:3000/products");
   
  }

  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product" : item})
    .subscribe(data =>{
      console.log(data)
    })
  }

  //SIGNUP AND LOGIN 
  registerAdmin(admin){
    return this.http.post(this._registerAdminUrl , admin)
  }
  loginAdmin(admin){
    return this.http.post(this._loginAdminUrl , admin)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  //DELETE
    deleteProduct(id:string){
      return this.http.delete(`http://localhost:3000/delete/${id}`)
    }

  //EDIT
    editProduct(id){
      return this.http.get(`http://localhost:3000/edit/${id}`)
    }
    updateProduct(item){
      return this.http.post("http://localhost:3000/update",{"product" : item})
      .subscribe(data=>{
        console.log("updateservice"+data);
      })
    }


}


