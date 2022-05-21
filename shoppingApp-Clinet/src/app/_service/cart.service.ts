import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../_models/item';
import { Order } from '../_models/order';
import { Product } from '../_models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient , private authService: AuthService) { }

getactiveorder() :Observable<Order>{
  return this.http.get<Order>(this.baseUrl + 'users/' + this.authService.decodedToken.id +'/orders/?status=Active');
}


addToCart(productId:any){
  return this.http.post(this.baseUrl + 'users/' + this.authService.decodedToken.id  +'/addproduct',productId)
}



getAllitemsinorders(orderId:number) :Observable<Item[]>{
return this.http.get<Item[]>(this.baseUrl + 'users/' + this.authService.decodedToken.id +'/orders/'+orderId+'/items' )
}

getItemdetails( orderId:number, itemId:number) : Observable<Item> {
return this.http.get<Item>(this.baseUrl + 'users/' + this.authService.decodedToken.id +'/orders/'+orderId+'/items' +itemId)
}

editItemQuantit(orderId:number,itemId:number,item:Item) {
  return this.http.put(this.baseUrl + 'users/' + this.authService.decodedToken.id +'/orders/'+orderId+'/items/' +itemId ,item )
}


removeItem(orderId:number, itemId:number) {
  return this.http.delete<Item>(this.baseUrl + 'users/' + this.authService.decodedToken.id +'/orders/'+orderId+'/items/' +itemId)
}

deleteOrder (orderId:number) {
  return this.http.delete<Order>(this.baseUrl + 'users/' + this.authService.decodedToken.id +'/orders/'+orderId)
}

}
