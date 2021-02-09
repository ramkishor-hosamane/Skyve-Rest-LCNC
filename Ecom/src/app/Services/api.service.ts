import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from 'src/app/product';
import {BehaviorSubject} from 'rxjs';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _productSource = new BehaviorSubject<Product>(new Product('',''));
  shareproduct = this._productSource.asObservable();
  products = new Observable<any>();
 
  constructor(private http:HttpClient) { 
    this.products = this.http.get(this.baseURL,this.headerOptions)

  }
  baseURL = "http://localhost:8080/restLCNC/rest/json/product/Product";
  //baseURL = "http://localhost:3000/getProduct";
  _url_insert = "http://localhost:8080/restLCNC/rest/json/insert";
  _url_delete = "http://localhost:8080/restLCNC/rest/json/delete";
  _url_update = "http://localhost:8080/restLCNC/rest/json/update";
  authorizationData = 'Basic ' + btoa('setup' + ':' + 'setup');
  httpHeaders = new HttpHeaders({'Content-type':'application/json','Authorization': this.authorizationData});
  headerOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authorizationData
    })
};
 
 
  ngOnInit(): void {
  }



  getAllProducts(): Observable<any>{
    //return this.http.get(this.baseURL,this.headerOptions)
    return this.products;
  }

  updateProductInProductComponenet(product:Product){
    this._productSource.next(product);
  }

  insertProduct(product:Product){

    let data = {
      "bizModule":"product",
      "bizDocument":"Product",
      "name":product.name,
      "price":product.price,
      "bizCustomer":"unisys",
      "bizDataGroupId":null
      }
    console.log("Trying to send ")
    console.log(data);  
    return this.http.put<any>(this._url_insert,data,{headers:this.httpHeaders});
  }


  deleteProduct(product:any){

   
    return this.http.request<any>('delete',this._url_delete,{headers:this.httpHeaders,body:product});
  }

  updateProduct(product:Product){

    
      return this.http.post<any>(this._url_update,product,{headers:this.httpHeaders});
    }

  
 


}
