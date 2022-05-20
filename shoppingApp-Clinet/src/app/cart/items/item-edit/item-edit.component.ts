import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { Order } from 'src/app/_models/order';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
 @Input() item!:Item
 order!:Order
  @Input() subtotal:number = 0

  constructor(private cartservice:CartService , private alertify:AlertifyService) { }

  ngOnInit() {
    this.subtotal = this.item.subtotal
  }

  getitmedetails() {
    this.cartservice.getItemdetails(this.order.id ,this.item.id).subscribe(item =>{
      this.item =item;
    })
  }




}
