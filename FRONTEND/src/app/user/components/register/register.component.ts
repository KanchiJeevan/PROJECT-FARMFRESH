import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product-list/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser = {userName:"" , email:"" , password:"" ,  number:""};
  

  constructor(private productService : ProductService , private router:Router) { }

  registerUser()
  {
    this.productService.registerUser(this.registeredUser)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res["token"]);
        alert("Success");
        this.router.navigate(['/'])
      },
      err=>console.log(err)
    )
  }
  

  ngOnInit(): void {
  }

}
