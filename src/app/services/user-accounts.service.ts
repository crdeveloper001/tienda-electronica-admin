import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthorization } from '../interfaces/Authorization';
import { Observable } from 'rxjs';
import { IUserAccounts } from '../interfaces/UserAccounts';
import { Endpoints } from '../utils/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  constructor(private httpRequest:HttpClient) { }

  GetAllUserAccounts(){
    return this.httpRequest.get<IUserAccounts[]>(Endpoints.BASE_ENDPOINT+Endpoints.serviceUserAccounts);
    
  }
  PostUserAccount(userAccount:IUserAccounts):Observable<IUserAccounts>{
    return this.httpRequest.post<IUserAccounts>(Endpoints.BASE_ENDPOINT+Endpoints.serviceUserAccounts,userAccount);
  }
  
}
