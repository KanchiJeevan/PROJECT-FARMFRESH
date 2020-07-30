import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product-list/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginAdminDetails={email:"" , password:""};

  constructor(private productService : ProductService , private router:Router) { }


  loginAdmin(){
    this.productService.loginAdmin(this.loginAdminDetails)
    .subscribe(res=>{
        console.log(res);
        localStorage.setItem('token',res["token"]);
        this.router.navigate(['/admin/home'])
      },
      err=>{
         console.log(err);
         alert("Invalid Email or Password");
        }
     
    )
  }
 
 




  ngOnInit(): void {
  }

}
