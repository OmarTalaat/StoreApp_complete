import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient , private authService: AuthService) { }




addToCart(productId:any){
  return this.http.post(this.baseUrl + 'users/' + this.authService.decodedToken.id  +'/addproduct',productId)
}

}
