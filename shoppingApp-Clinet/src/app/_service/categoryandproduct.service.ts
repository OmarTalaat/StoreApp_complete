import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/category';
import { Product } from '../_models/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryandproductService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient , private authService: AuthService) { }


getAllcategoriesforuser(): Observable<Category[]> {
  return this.http.get<Category[]>(this.baseUrl + 'users/' + this.authService.decodedToken.id + '/categories' );
 }

 getCategory(id: number): Observable<Category> {
  return this.http.get<Category>(this.baseUrl +'users/' + this.authService.decodedToken.id + '/categories/' + id);

}

getAllproducts(categoryId: number): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl + 'users/' + this.authService.decodedToken.id + '/categories/' + categoryId + '/products');
}

getproduct( categoryId: number , productId:number): Observable<Product> {
 return this.http.get<Product>(this.baseUrl + 'users/' + this.authService.decodedToken.id + '/categories/' + categoryId +'/products/' + productId);
}


}
