import { HttpErrorResponse } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IProducts } from "src/app/interfaces/Products";
import { ProductsService } from "src/app/services/products.service";
import { SharedInformationUtils } from "src/app/services/utils/share-information-utils";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  product: IProducts[] = [];
  productFormGroup: FormGroup;
  statusUpdate:boolean = false;

  constructor(
    private sharedService: SharedInformationUtils,
    private service: ProductsService,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private navigation:Router
  ) {
    this.productFormGroup = this.formBuilder.group({
     
      productNameInput: new FormControl("", Validators.required),
      productDescriptionInput: new FormControl("", Validators.required),
      productTypeInput: new FormControl("", Validators.required),
      productUrlImageInput: new FormControl("", Validators.required),
      productPriceInput: new FormControl("", Validators.required),
      productStockInput: new FormControl("", Validators.required),
    });
  }

  async UpdateProductInfo() {
    const update: IProducts = {
      _id: this.product[0]._id,
      productDetails: this.productFormGroup.get("productDescriptionInput")
        ?.value,
      productImageUrl: this.productFormGroup.get("productUrlImageInput")?.value,
      productName: this.productFormGroup.get("productNameInput")?.value,
      productPrice: this.productFormGroup.get("productPriceInput")?.value,
      productStock: this.productFormGroup.get("productStockInput")?.value,
      productType: this.productFormGroup.get("productTypeInput")?.value,
    };

    this.service.PutOneProduct(update).subscribe(
      (result) => {
        alert(JSON.stringify(result));
      },
      (error: HttpErrorResponse) => {
        this.statusUpdate = true;
        setTimeout(() => {
          this.statusUpdate = false;
          this.navigation.navigateByUrl("View-Products")
        }, 3000);
        
      }
    );
  }

  ngOnInit() {
    this.sharedService.data$.subscribe((data) => {
      this.product.pop();
      this.product.push(data);
      this.productFormGroup
        .get("productNameInput")
        ?.setValue(this.product[0].productName);
      this.productFormGroup
        .get("productDescriptionInput")
        ?.setValue(this.product[0].productDetails);
      this.productFormGroup
        .get("productTypeInput")
        ?.setValue(this.product[0].productType);
      this.productFormGroup
        .get("productUrlImageInput")
        ?.setValue(this.product[0].productImageUrl);
      this.productFormGroup
        .get("productPriceInput")
        ?.setValue(this.product[0].productPrice);
      this.productFormGroup
        .get("productStockInput")
        ?.setValue(this.product[0].productStock);
    });
  }
}
