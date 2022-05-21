import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Product } from '../_models/product';
import { AlertifyService } from '../_service/alertify.service';
import { AuthService } from '../_service/auth.service';
import { CategoryandproductService } from '../_service/categoryandproduct.service';



@Injectable({
  providedIn: 'root'
})

export class ProductDetailsResolver implements Resolve<Product> {


  constructor(private catandproservice: CategoryandproductService, private router: Router,
    private alertify: AlertifyService , private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.catandproservice.getproduct(+route.params['id'],+route.params['productId']).pipe(
      catchError(error => {
          this.alertify.error('Proplem retriving data');
          this.router.navigate(['/categorylist']);
          return of(null);
      })
  );
  }
}

