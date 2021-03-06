import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product-list/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService : ProductService , private router:Router) { }

  ngOnInit(): void {
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
}
