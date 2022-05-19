import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
 @Input()  product!:Product

  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  addToCart(product:Product){

    this.cartService.addToCart(product);
  }

}
