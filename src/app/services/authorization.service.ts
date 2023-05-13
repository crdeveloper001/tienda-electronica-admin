import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthorization } from '../interfaces/Authorization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private readonly API_SERVER:string = "https://localhost:7149/api/Authorization";

  constructor(private request:HttpClient) { }

  PostAuthorization(credentials:IAuthorization):Observable<IAuthorization>{
    return this.request.post<IAuthorization>(this.API_SERVER,credentials);
  }
}
