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
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';

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
      CategoryDetailsComponent,
      CategoryListComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertifyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
