import { Injectable } from '@angular/core';
import { IProductOrders } from '../interfaces/ProductOrders';
import { Endpoints } from '../utils/Endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsOrdersService {


  constructor(private httpRequest: HttpClient) { }

  GetAllProductsOrders() {
    return this.httpRequest.get<IProductOrders[]>(Endpoints.BASE_ENDPOINT + Endpoints.serviceProductOrder);

  }

}
