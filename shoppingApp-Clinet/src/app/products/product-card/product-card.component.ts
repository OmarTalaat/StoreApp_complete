import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
 @Input()  product!:Product
 @Output('update') change: EventEmitter<number> = new EventEmitter<number>();
 count: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }




  increment() {
    this.count++;
    this.change.emit(this.count);
  }
  addItemToCart( id:any): void {
    let payload = {
      productId: id
    };
    this.cartService.addToCart(payload).subscribe(() => {

      this.increment()
    });
  }

}
