import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./_guards/auth.guard";




export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'sinup' ,component:RegisterComponent},

   {path: '',
  runGuardsAndResolvers: 'always',
  canActivate : [AuthGuard],
  children: [
      {path: 'products',component:ProductsComponent}


  ]
  },

  {path: '**', redirectTo: '', pathMatch: 'full'}
];
