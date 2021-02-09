import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  product:Product;
  constructor() { 
    this.product=  new Product('','')

  }

  setUpdateProduct(product:Product){
    this.product = product;
  }
  getUpdateProduct():any{

  return this.product
  }

}

