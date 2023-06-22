import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../utils/Endpoints';
import { IAppLogs } from '../interfaces/AppLogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLogsService {

  payloadFromLogin:any;
  jwtAuth:string = "";
 

  constructor(private httpRequest:HttpClient) { 
  
  }


  

  PostAppLogs(log:IAppLogs):Observable<IAppLogs>{
    
    return this.httpRequest.post<IAppLogs>(Endpoints.BASE_ENDPOINT+Endpoints.serviceAppLogs,log);
  }

  GetAllAppsLogs(){
   
    const storedDataProfile = localStorage.getItem("payload");
    if (storedDataProfile) {
      this.payloadFromLogin = JSON.parse(storedDataProfile);
      this.jwtAuth = this.payloadFromLogin[0].jwt

    }
    return this.httpRequest.get<IAppLogs[]>(Endpoints.BASE_ENDPOINT+Endpoints.serviceAppLogs,{headers:new HttpHeaders(
      {
        'Content-type': 'application/json',
        'Authorization': this.jwtAuth,


      }
    )});
  }
}
