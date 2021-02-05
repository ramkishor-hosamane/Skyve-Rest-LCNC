import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot([
      { path :'' , component:ProductComponent},
      { path :'home' , component:HomeComponent},
      { path :'signuop' , component:AppComponent},
      { path :'login' , component:AppComponent},
      { path :'**' , component:NotFoundComponent},

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
