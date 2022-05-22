import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { AuthService } from 'src/app/_service/auth.service';
import { CartService } from 'src/app/_service/cart.service';
import { MessageService } from 'src/app/_service/message.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order!:Order
   user!:User
   itemcount: number;
   total:number;
   username!:string
   @Output() itemcountChanged: EventEmitter<number> =   new EventEmitter();
  constructor(private alertify: AlertifyService ,
    private route: ActivatedRoute,private router: Router ,private authservice:AuthService , private message:MessageService , private cartservice:CartService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.order = data['order'];

        this.itemcount =this.order?.itemcount


      if (this.order?.itemcount > 0) {
        this.alertify.message('thanks for making order with us')
      }


   });

  }



  changeitemcount(data:number){

    this.itemcount = data

  }



}
