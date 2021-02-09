import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { UpdateProductComponent } from './Components/product/update-product/update-product.component';

const routes: Routes = [
      { path :'' ,redirectTo:'/products',pathMatch:'full'},
      { path :'products' , component:ProductComponent},
      { path :'products/update' , component:UpdateProductComponent},
      { path :'home' , component:HomeComponent},
      { path :'signup' , component:SignupComponent},
      { path :'login' , component:LoginComponent},
      { path :'**' , component:NotFoundComponent},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
