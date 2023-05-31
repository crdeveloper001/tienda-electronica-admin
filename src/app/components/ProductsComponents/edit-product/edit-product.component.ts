import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IProducts } from "src/app/interfaces/Products";
import { SharedInformationUtils } from "src/app/services/utils/send-info-to-edit-product.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  product: any = null;
  productFormGroup: FormGroup;

  constructor(
    private sharedService: SharedInformationUtils,
    private formBuilder: FormBuilder,
    private cdRef:ChangeDetectorRef
  ) {
    this.productFormGroup = this.formBuilder.group({
      productNameInput: new FormControl("", Validators.required),
      productDescriptionInput: new FormControl("", Validators.required),
      productTypeInput: new FormControl("", Validators.required),
      productUrlImageInput: new FormControl("", Validators.required),
      productPriceInput: new FormControl("", Validators.required),
      productStockInput: new FormControl("", Validators.required),
    });
    // this.product = {
     
    //   productDetails: "",
    //   productImageUrl: "",
    //   productName: "",
    //   productPrice: 0,
    //   productStock: 0,
    //   productType: "",
    // };
   
   
  }

  async UpdateProductInfo() {
    alert("test");
  }

  /**
   * This method get the product info from product as prop from the table 
   */
  GetProductInfoSelected() {
    

    console.log(this.product);
    
    
    
  }

  ngOnInit() {
    this.sharedService.productSelectedInfo.subscribe((data) => {
      debugger
      this.product= data
       this.cdRef.detectChanges();
     });
 
  }
}
