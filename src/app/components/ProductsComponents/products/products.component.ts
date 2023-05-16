import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 7.99 }
  ];
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }
  editProduct(productId: number) {
    // Logic to handle editing the product with the given ID
    console.log('Edit product with ID:', productId);
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    
    // Logic to handle submitting the new product data
    const newProduct = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    };
    console.log('New product:', newProduct);
    
    // Reset the form
    this.productForm.reset();
  }
  ngOnInit(): void {
  }

}
