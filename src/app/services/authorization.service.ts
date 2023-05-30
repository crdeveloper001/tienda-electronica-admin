import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthorization } from '../interfaces/Authorization';
import { Observable } from 'rxjs';
import { Endpoints } from '../utils/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

 

  constructor(private request:HttpClient) { }

  PostAuthorization(credentials:IAuthorization):Observable<IAuthorization>{
    return this.request.post<IAuthorization>(Endpoints.BASE_ENDPOINT+Endpoints.auth_Endpoint,credentials);
  }
}
