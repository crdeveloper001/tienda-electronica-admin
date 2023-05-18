import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IProducts } from "src/app/interfaces/Products";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"],
})
export class NewProductComponent implements OnInit {
  productFormGroup: FormGroup;
  product: IProducts;

  constructor(private formBuilder: FormBuilder,private service:ProductsService) {
    this.productFormGroup = this.formBuilder.group({
      productNameInput: new FormControl("", Validators.required),
      productDescriptionInput: new FormControl("", Validators.required),
      productTypeInput: new FormControl("", Validators.required),
      productUrlImageInput: new FormControl("", Validators.required),
      productPriceInput: new FormControl("", Validators.required),
      productStockInput: new FormControl("", Validators.required),
    });
    
    this.product = {
     
      productDetails: "",
      productImageUrl: "",
      productName: "",
      productPrice: 0,
      productStock: 0,
      productType: "",
    };
  }

  AddNewProduct() {
    this.product = {
      
      productName: this.productFormGroup.get("productNameInput")?.value,
      productDetails: this.productFormGroup.get("productDescriptionInput")?.value,
      productImageUrl: this.productFormGroup.get('productUrlImageInput')?.value,
      productPrice: this.productFormGroup.get('productPriceInput')?.value,
      productStock:this.productFormGroup.get('productStockInput')?.value,
      productType:this.productFormGroup.get('productTypeInput')?.value
    };


    this.service.PostNewProduct(this.product).subscribe((result:any) =>{
      alert(result);
    },(error:HttpErrorResponse) =>{
      alert(JSON.stringify(error));
    })

  }

  ngOnInit(): void {}
}
