import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseURL = "http://localhost:8080/restLCNC/rest/json/product/Product";
  //baseURL = "http://localhost:3000/getProduct";

  httpHeaders = new HttpHeaders({'Content-type':'application/json'});

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseURL,{headers:this.httpHeaders})
  }

}
