import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthorization } from '../interfaces/Authorization';
import { Observable } from 'rxjs';
import { IUserAccounts } from '../interfaces/UserAccounts';
import { Endpoints } from '../utils/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  constructor(private httpRequest: HttpClient) {

  }


  GetAllUserAccounts() {
    return this.httpRequest.get<IUserAccounts[]>(Endpoints.BASE_ENDPOINT + Endpoints.serviceUserAccounts);

  }
  PostUserAccount(userAccount: IUserAccounts): Observable<IUserAccounts> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Content-Type', 'application/json')
    return this.httpRequest.post<IUserAccounts>(Endpoints.BASE_ENDPOINT + Endpoints.serviceUserAccounts, userAccount, { headers });
  }

  PutUserAccount(update: IUserAccounts): Observable<IUserAccounts> {
    return this.httpRequest.put<IUserAccounts>(Endpoints.BASE_ENDPOINT + Endpoints.serviceUserAccounts, update);
  }

  DeleteUserAccount(id: Number): Observable<Number> {
    return this.httpRequest.delete<Number>(Endpoints.BASE_ENDPOINT + Endpoints.serviceUserAccounts + id);
  }

}
