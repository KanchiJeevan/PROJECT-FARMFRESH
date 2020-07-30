import { Component, OnInit } from '@angular/core';
import { CartService } from "./cart.service";
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : ProductModel[];
  items;
  
  
  //image properties
  imageWidth : number = 300;
  imageHeight : number = 200;
  imageMargin : number = 2;

  constructor(private cartService:CartService) {}

  
  ngOnInit(): void {

  this.items=this.cartService.getItems();
  }

  clearCart(){
    this.items=this.cartService.clearCart();
    
  }
  Buy(){
   
    alert("Proceed to Payment");
  }

}
