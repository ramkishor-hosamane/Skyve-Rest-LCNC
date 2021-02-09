import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../Services/api.service';
import { Product } from './../../product';
import {Router} from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ApiService]

})
export class ProductComponent implements OnInit {


  
  ngOnInit(): void {
    this.api.shareproduct
    .subscribe(
      data => {
                console.log("Hello",data);
                this.products[this.products.indexOf(data)] = data;
              }
      
    );
  }

  title = 'Ecom';
  showoptions:boolean= true;
  alert_success = false;
  products = [{"bizModule":"product","bizDocument":"Product","name":"RiceFromAngular","price":"50","bizId":"3c36be46-318d-4037-8a29-2438f093d35f","bizCustomer":"unisys","bizDataGroupId":null,"bizUserId":"47d425e8-2e4c-4c31-b8de-b021171d3bb0"},{"bizModule":"product","bizDocument":"Product","name":"MilkFromAngular","price":"20","bizId":"db459e89-9b41-4f7a-ae3f-c97e7fe96117","bizCustomer":"unisys","bizDataGroupId":null,"bizUserId":"47d425e8-2e4c-4c31-b8de-b021171d3bb0"}]
  //products:any;
  constructor (private api:ApiService,private shared:SharedService,private router:Router){
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
    this.api.insertProduct(this.productModel).subscribe(
      data => console.log('Success!',data),
      error => console.error('!error',error)
    )
    this.productModel = new Product('','');
    this.alert_success = true;
    setTimeout(this.getProducts,100);
    //this.getProducts();



  
  }
  
  updateProductFields(product:any){
    this.shared.setUpdateProduct(product);
    this.router.navigate(['products/update'])

  }

  
 

  
  onDeleteProduct(product:any){

    this.api.deleteProduct(product).subscribe(
      data => console.log('Success!',data),
      error => console.error('!error',error)
    )
    this.products.splice(this.products.indexOf(product),1)
    console.log("Deleted")
    console.log(this.products)
    
  }
  


}
