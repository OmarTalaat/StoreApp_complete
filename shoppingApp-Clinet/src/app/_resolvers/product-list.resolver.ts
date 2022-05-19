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
export class ProductListResolver implements Resolve<Product[]> {
  products!:Product[]

  constructor(private catandproservice: CategoryandproductService,
    private router: Router, private alertify: AlertifyService , private authService: AuthService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]>|any {
    return this.catandproservice.getAllproducts(+route.params['id']).pipe(
      catchError(error => {
          this.alertify.error('Proplem retriving data');
          this.router.navigate(['/home']);
          return of(null);
      })
  );
  }
}
