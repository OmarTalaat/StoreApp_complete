import { Routes } from "@angular/router";
import { CategoryListComponent } from "./categories/category-list/category-list.component";
import { HomeComponent } from "./home/home.component";

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
      {path: 'categorylist',component:CategoryListComponent}


  ]
  },

  {path: '**', redirectTo: '', pathMatch: 'full'}
];
