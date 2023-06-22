import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProductOrders } from 'src/app/interfaces/ProductOrders';
import { IProducts } from 'src/app/interfaces/Products';
import { ProductsOrdersService } from 'src/app/services/products-orders.service';

@Component({
  selector: 'app-clients-orders',
  templateUrl: './clients-orders.component.html',
  styleUrls: ['./clients-orders.component.css']
})
export class ClientsOrdersComponent implements OnInit {

  generalOrders: IProductOrders[];
  dynamicCustomerOrders:IProducts[];

  constructor(private service: ProductsOrdersService) {
    this.generalOrders = [];
    this.dynamicCustomerOrders = [];
  }

  GetCustomerOrders() {
    this.service.GetAllProductsOrders().subscribe((result: any) => {
      this.generalOrders = result
    });
  }

  ObtainIndividualOrderFromCustomer(product:IProducts[]){
    this.dynamicCustomerOrders = product;
  }

  ngOnInit(): void {
    this.GetCustomerOrders();
  }

}
