import { Routes } from "@angular/router";
import { CheckoutComponent } from "./cart/checkout/checkout.component";
import { OrderDetailsComponent } from "./cart/order/order-details/order-details.component";
import { CategoryListComponent } from "./categories/category-list/category-list.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";

import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./_guards/auth.guard";
import { OrderDetailsResolver } from "./_resolvers/order-details.resolver";
import { ProductDetailsResolver } from "./_resolvers/product-details.resolver";
import { ProductListResolver } from "./_resolvers/product-list.resolver";




export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'sinup' ,component:RegisterComponent},

   {path: '',
  runGuardsAndResolvers: 'always',
  canActivate : [AuthGuard],
  children: [
      {path: 'categorylist',
            children: [
              {path:'' , component:CategoryListComponent},
              {path:':id' ,
                  children:[
                    {path:'products' ,
                  children: [
                    {path:'', component:ProductsListComponent , resolve: {products: ProductListResolver}},
                    {path:':productId',component:ProductDetailsComponent , resolve: {product:ProductDetailsResolver}}
                  ]}
                  ]}
            ]},
            {path:'cart' ,component:OrderDetailsComponent , resolve: {order:OrderDetailsResolver}},
            {path:'checkform' , component:CheckoutComponent}



  ]
  },

  {path: '**', redirectTo: '', pathMatch: 'full'}
];
