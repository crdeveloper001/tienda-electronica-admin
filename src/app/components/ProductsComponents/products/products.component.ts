import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { observable } from 'rxjs';
import { IProducts } from 'src/app/interfaces/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:IProducts[];
  productForm:FormGroup;
 
  constructor(private service:ProductsService,private formBuilder:FormBuilder) {
    this.products = [];
    this.ShowAllProducts()

    this.productForm = this.formBuilder.group({
      InputSearchProduct: new FormControl("",Validators.required)
    })
    
  }
  
  ShowAllProducts(){
    this.service.GetAllProducts().subscribe((data:any) =>{
      this.products = data;
      
      
    })

  }
  SearchProductByName(){
    let productName:string = this.productForm.get('InputSearchProduct')?.value;
    
    
    this.service.GetOneProduct(productName).subscribe((results:any) =>{
      this.products = results;
    })
  }
  SearchProductByCategory(){
    let productType:string = this.productForm.get('InputSearchProduct')?.value;
   
    this.service.GetOneProduct(productType).subscribe((results:any) =>{
      this.products = results;
    })
  }

 
  ngOnInit(): void {
  }

}
