import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ApiService } from 'src/app/Services/api.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

    //product={"bizModule":"product","bizDocument":"Product","name":"RiceFromAngular","price":"50","bizId":"3c36be46-318d-4037-8a29-2438f093d35f","bizCustomer":"unisys","bizDataGroupId":null,"bizUserId":"47d425e8-2e4c-4c31-b8de-b021171d3bb0"};
    product:any;
    products:Array<Product>=[];
  
    constructor(private shared:SharedService,private api:ApiService,private router:Router) { 
      this.getProducts()

  }

  ngOnInit(): void {
    this.product = this.shared.getUpdateProduct();
  }

  onUpdateProduct(){
    
    
    this.api.updateProduct(this.product).subscribe(
      data => console.log('Success!',data),
      error => console.error('!error',error)
    )

    //this.products[0].name ="Cassandra";
    this.api.updateProductInProductComponenet(this.product)  

    this.router.navigate(['products'])

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

     
}
