import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/cart/models/item';
import { Order } from 'src/app/cart/models/order';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
 @Input() item!:Item
 @Input() subtotal:number;
  @Input() quantity: number;
  @Input() itemId:number
 @Input() order!:Order;

    @Output() removeItem: EventEmitter<Item> =   new EventEmitter();

    @Output() public sendquantiyandId =  new EventEmitter<Item>();

  constructor(private cartservice:CartService , private alertify:AlertifyService) { }

  ngOnInit() {
    this.subtotal =this.item.subtotal
    this.quantity =this.item?.quantity
    this.itemId =this.item?.id


  }


    increment() {
        this.quantity++;
        this.subtotal = parseFloat((this.item.product.price * this.quantity).toFixed(2))
        this.sendquantiyandId.emit({id:this.item.id , quantity:this.quantity ,subtotal:this.subtotal,product: this.item.product });

      }
    decrement() {
      this.quantity--;
        if (this.quantity < 1) {
          return alert("can't be in 0")
        }else{

        this.subtotal = parseFloat((this.item.product.price * this.quantity).toFixed(2))
        this.sendquantiyandId.emit({id:this.item.id , quantity:this.quantity ,subtotal:this.subtotal,product: this.item.product });
      }
    }

    deleteItem(itemId:number){

      this.removeItem.emit({id:this.itemId, quantity:this.quantity ,subtotal:this.subtotal,product: this.item.product })
    }


}
