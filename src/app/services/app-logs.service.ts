import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../utils/Endpoints';
import { IAppLogs } from '../interfaces/AppLogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLogsService {

  constructor(private httpRequest:HttpClient) { }

  PostAppLogs(log:IAppLogs):Observable<IAppLogs>{
    return this.httpRequest.post<IAppLogs>(Endpoints.BASE_ENDPOINT+Endpoints.serviceAppLogs,log);
  }

  GetAllAppsLogs(){
    return this.httpRequest.get<IAppLogs[]>(Endpoints.BASE_ENDPOINT+Endpoints.serviceAppLogs);
  }
}
