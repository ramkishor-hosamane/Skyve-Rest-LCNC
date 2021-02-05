import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from './../product';

@Injectable({
  providedIn: 'root'
})
export class SubmitProductService {

  _url='http://localhost:3000/addProduct';
  constructor(private _http:HttpClient) { }

  submitData(product:Product){
    return this._http.post<any>(this._url,product);
  }

}
