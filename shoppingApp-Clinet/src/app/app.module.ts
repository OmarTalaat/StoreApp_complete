import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_service/auth.service';
import { AlertifyService } from './_service/alertify.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HasRoleDirective } from './_directive/hasRole.directive';
import { UserService } from './_service/user.service';
import { UniqueUserNameDirective } from './_directive/uniqueUserName.directive';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryandproductService } from './_service/categoryandproduct.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ProductListResolver } from './_resolvers/product-list.resolver';
import { ProductDetailsResolver } from './_resolvers/product-details.resolver';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartService } from './_service/cart.service';
import { ItemDetailsComponent } from './cart/items/item-details/item-details.component';
import { ItemListComponent } from './cart/items/item-list/item-list.component';
import { ItemEditComponent } from './cart/items/item-edit/item-edit.component';
import { OrderDetailsComponent } from './cart/order/order-details/order-details.component';
import { OrderDetailsResolver } from './_resolvers/order-details.resolver';
import { MessageService } from './_service/message.service';
import { OrderEditComponent } from './cart/order/order-edit/order-edit.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminProductsMangementComponent } from './admin/admin-products-mangement/admin-products-mangement.component';
import { PhotoMangementComponent } from './admin/photo-mangement/photo-mangement.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UsersMangementComponent } from './admin/users-mangement/users-mangement.component';
import { CategoriesMangementComponent } from './admin/categories-mangement/categories-mangement.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      NavBarComponent,
      RegisterComponent,
      HasRoleDirective,
      UniqueUserNameDirective,
      ProductCardComponent,
      ProductDetailsComponent,
      ProductsListComponent,
      CategoryCardComponent,
      CategoryListComponent,
      CheckoutComponent,
      ItemDetailsComponent,
      ItemListComponent,
      ItemEditComponent,
      OrderDetailsComponent,
      OrderEditComponent,
      AdminNavComponent,
      AdminProductsMangementComponent,
      PhotoMangementComponent,
      UserListComponent,
      UsersMangementComponent,
      CategoriesMangementComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
         tokenGetter,
         allowedDomains: ['localhost:3000'],
         disallowedRoutes: ['localhost:3000/api/auth']
      }
   })
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertifyService,
    UserService,
    CategoryandproductService,
    ProductListResolver,
    ProductDetailsResolver,
    CartService,
    OrderDetailsResolver,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
