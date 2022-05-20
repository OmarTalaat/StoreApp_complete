import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order!:Order
   user!:User
  @Input() itemcount: number =0
   total:number =0
   username!:string
   @Output() itemcountChanged: EventEmitter<number> =   new EventEmitter();
  constructor(private alertify: AlertifyService ,
    private route: ActivatedRoute,private router: Router ,private authservice:AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.order = data['order'];
      this.itemcount = this.order?.itemcount
      if (this.order?.itemcount > 0) {
        this.alertify.message('thanks for making order with us')
      }
   });
   this.username = this.authservice.decodedToken.username
  }


  changeitemcount(){
    this.itemcountChanged.emit(this.itemcount);
  }


}
