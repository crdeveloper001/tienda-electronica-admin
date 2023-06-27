import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../utils/Endpoints';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {

  constructor(private httpRequest:HttpClient) { }

  PostAttachImage(formData:FormData){

    console.log(formData);
    return this.httpRequest.post<any>(Endpoints.BASE_ENDPOINT+Endpoints.fileAttach,formData);
  }
}
