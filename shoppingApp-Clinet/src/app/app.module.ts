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
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartService } from './_service/cart.service';


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
      CartComponent,
      CheckoutComponent

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
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
