import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Order } from '../_models/order';
import { AlertifyService } from '../_service/alertify.service';
import { AuthService } from '../_service/auth.service';
import { CartService } from '../_service/cart.service';

@Injectable({
  providedIn: 'root'
})

export class OrderDetailsResolver implements Resolve<Order> {

  constructor(private cartservice: CartService, private router: Router,
    private alertify: AlertifyService , private authService: AuthService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order>{
    return this.cartservice.getactiveorder().pipe(

      catchError(error => {
          this.alertify.error('Proplem retriving data');
          this.router.navigate(['/categorylist']);
          return of(null);
      })
      )
  }
}

