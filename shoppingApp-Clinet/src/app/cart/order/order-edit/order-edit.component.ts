import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { AuthService } from 'src/app/_service/auth.service';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
@Input() order!:Order
@ViewChild('editForm', {static: true}) editForm: NgForm;
username: string

 @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private authservice:AuthService ,private cartservice:CartService ,
    private alertify:AlertifyService , private router: Router) { }

  ngOnInit() {
    this.username = this.authservice.decodedToken.username

  }

  updateOrder() {

    this.cartservice.addadressToOrder(this.order.id ,this.order).subscribe (next =>{
      this.router.navigate(['/cart',this.order.id])
    })



  }

}
