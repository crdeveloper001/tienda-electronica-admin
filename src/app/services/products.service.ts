import { Injectable } from '@angular/core';
import { Endpoints } from '../utils/Endpoints';
import { Observable } from 'rxjs';
import { IProducts } from '../interfaces/Products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(private httpRequest:HttpClient) { }

  PostNewProduct(product:IProducts):Observable<IProducts>{
    return this.httpRequest.post<IProducts>(Endpoints.BASE_ENDPOINT+Endpoints.serviceProduct,product);
  }

  GetAllProducts(){
    return this.httpRequest.get<IProducts[]>(Endpoints.BASE_ENDPOINT+Endpoints.serviceProduct);
    
  }

  GetOneProduct(name:string){
    return this.httpRequest.get<IProducts>(Endpoints.BASE_ENDPOINT+Endpoints.service_SearchOneProduct+name);
  }

  PutOneProduct(update:IProducts):Observable<IProducts>{
    return this.httpRequest.put<IProducts>(Endpoints.BASE_ENDPOINT+Endpoints.serviceProduct,update)
  }

  DeleteOneProduct(id:string){
    return this.httpRequest.delete<string>(Endpoints.BASE_ENDPOINT+Endpoints.serviceProduct+"/"+id);
  }
}
