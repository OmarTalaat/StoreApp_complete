import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from './routes/routes';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HasRoleDirective } from '../shared/directives/hasRole.directive';
import { UserService } from '../member/service/user.service';
import { UniqueUserNameDirective } from '../shared/directives/uniqueUserName.directive';
import { ProductCardComponent } from '../products/components/product-card/product-card.component';
import { ProductDetailsComponent } from '../products/components/product-details/product-details.component';
import { ProductsListComponent } from '../products/components/products-list/products-list.component';
import { CategoryCardComponent } from '../categories/components/category-card/category-card.component';
import { CategoryListComponent } from '../categories/components/category-list/category-list.component';
import { CategoryandproductService } from '../products/service/product.service';
import { JwtModule } from '@auth0/angular-jwt';
import { CheckoutComponent } from '../cart/components/checkout/checkout.component';
import { CartService } from '../cart/services/cart.service';
import { ItemDetailsComponent } from '../cart/components/items/item-details/item-details.component';
import { ItemListComponent } from '../cart/components/items/item-list/item-list.component';
import { ItemEditComponent } from '../cart/components/items/item-edit/item-edit.component';
import { OrderDetailsComponent } from '../cart/components/order/order-details/order-details.component';
import { OrderDetailsResolver } from '../cart/resolvers/order-details.resolver';
import { MessageService } from './services/message.service';

import { AdminNavComponent } from '../admin/components/admin-nav/admin-nav.component';
import { AdminProductsMangementComponent } from '../admin/components/admin-products-mangement/admin-products-mangement.component';
import { PhotoMangementComponent } from '../admin/components/photo-mangement/photo-mangement.component';
import { UserListComponent } from '../admin/components/user-list/user-list.component';
import { UsersMangementComponent } from '../admin/components/users-mangement/users-mangement.component';
import { CategoriesMangementComponent } from '../admin/components/categories-mangement/categories-mangement.component';
import { CategoryService } from '../categories/services/category.service';
import { OrderEditComponent } from '../cart/components/order/order-edit/order-edit.component';
import { ProductDetailsResolver } from '../products/resolvers/product-details.resolver';
import { ProductListResolver } from '../products/resolvers/product-list.resolver';
import { CreditCardDirectivesModule } from 'angular-cc-library';


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
    CreditCardDirectivesModule,
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
    MessageService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
