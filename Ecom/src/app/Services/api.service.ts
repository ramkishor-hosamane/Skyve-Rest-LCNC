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
  authorizationData = 'Basic ' + btoa('setup' + ':' + 'setup');
  
  httpHeaders = new HttpHeaders({'Content-type':'application/json','Authorization': this.authorizationData});
  headerOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authorizationData
    })
};
  getAllProducts(): Observable<any>{
    return this.http.get(this.baseURL,this.headerOptions)
  }

}
