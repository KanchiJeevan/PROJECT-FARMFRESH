import { Component, OnInit } from '@angular/core';
import { ProductModel } from "./product.model";
import { ProductService } from "../product-list/product.service";
import { CartService } from "../cart/cart.service";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title : String = "OUR PRODUCTS";

  
  products : ProductModel[];

 
  imageWidth : number = 150;
  imageHeight : number = 100;
  imageMargin : number = 2;

  showImage : boolean = true;



  constructor(private productService:ProductService , private router:Router , 
              private route:ActivatedRoute, private cartService:CartService)  { }

  

  toggleImage() : void{
    this.showImage = !this.showImage;
   }

  ngOnInit(): void {

    
    this.productService.getProducts()
    .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

    
  //DELETE
   Delete(id:string){
     let Confirm:boolean=confirm("Are you sure you want to delete this product?");
     if(Confirm){
       this.productService.deleteProduct(id)
       .subscribe((response:{id})=>{
         console.log(`product with id ${response.id} deleted successfully`);
         this.productService.getProducts()
         .subscribe((data)=>{
           this.products= JSON.parse(JSON.stringify(data));
         })
       })
        
    }
  }
  //ADD TO CART
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
  

}

