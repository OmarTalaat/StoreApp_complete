import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { CartService } from 'src/app/_service/cart.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
 @Input()  product!:Product
 @Output('update') change: EventEmitter<number> = new EventEmitter<number>();
 itemcount: number = 0;
  constructor(private cartService:CartService ,private location: Location) { }

  ngOnInit() {
  }


  back(): void {
    this.location.back();
  }

  increment() {
    this.itemcount++;
    this.change.emit(this.itemcount);
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
