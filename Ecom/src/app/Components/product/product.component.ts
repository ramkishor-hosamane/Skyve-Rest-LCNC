import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../Services/api.service';
import { Product } from './../../product';
import { SubmitProductService } from './../../Services/submit-product.service';
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ApiService,SubmitProductService]

})
export class ProductComponent implements OnInit {

  
  ngOnInit(): void {
  }

  title = 'Ecom';
  products = [{"bizModule":"product","bizDocument":"Product","name":"RiceFromAngular","price":"50","bizId":"3c36be46-318d-4037-8a29-2438f093d35f","bizCustomer":"unisys","bizDataGroupId":null,"bizUserId":"47d425e8-2e4c-4c31-b8de-b021171d3bb0"},{"bizModule":"product","bizDocument":"Product","name":"MilkFromAngular","price":"20","bizId":"db459e89-9b41-4f7a-ae3f-c97e7fe96117","bizCustomer":"unisys","bizDataGroupId":null,"bizUserId":"47d425e8-2e4c-4c31-b8de-b021171d3bb0"}]
  //products:any;
  constructor (private api:ApiService,private _submitProductService:SubmitProductService){
    this.getProducts();
  }

  getProducts = () =>{
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    )
  }




  //Add product form variable
  productModel = new Product('','')
  
  onSubmitProductForm(){
    console.log(this.productModel)
  
    //using service to post data to skyve
    this._submitProductService.submitData(this.productModel).subscribe(
      data => console.log('Success!',data),
      error => console.error('!error',error)
    )
    //this.productModel = new Product('','');



  
  }




}
