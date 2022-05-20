import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { Order } from 'src/app/_models/order';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  total:number=0
  subtotal!:number
  @Input() order!:Order
  items!:Item[]


  constructor(private cartservice:CartService, private alertify:AlertifyService) { }

  ngOnInit() {
    this.loadItems();

   this.total= this.order?.total

  }

  loadItems() {
    this.cartservice.getAllitemsinorders(this.order?.id).subscribe((items:Item[])=>{
      this.items = items;

    })
  }






}



