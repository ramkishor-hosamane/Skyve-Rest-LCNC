import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from './../product';

@Injectable({
  providedIn: 'root'
})
export class SubmitProductService {

  //_url='http://localhost:3000/addProduct';
  _url = "http://localhost:8080/restLCNC/rest/json/insert/";

  constructor(private _http:HttpClient) { }

  authorizationData = 'Basic ' + btoa('setup' + ':' + 'setup');
  httpHeaders = new HttpHeaders({'Content-type':'application/json','Authorization': this.authorizationData});
  data = {"bizModule":"product",
          "bizDocument":"Product",
          "name":"Biscuit","price":"30",
          "bizId":"3c36be46-318d-4037-8a29-2438f093d35g",
          "bizCustomer":"unisys",
          "bizDataGroupId":null,
          "bizUserId":"47d425e8-2e4c-4c31-b8de-b021171d3bb4"}
  submitData(product:Product){
    return this._http.post<any>(this._url,this.data,{headers:this.httpHeaders});
  }

}
