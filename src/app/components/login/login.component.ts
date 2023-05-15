import { HttpErrorResponse } from "@angular/common/http";
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ProfileComponent } from "../profile/profile.component";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IAuthorization } from "src/app/interfaces/Authorization";
import { IUserAccounts } from "src/app/interfaces/UserAccounts";
import { AuthorizationService } from "src/app/services/authorization.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild('ProfileModalInfo')
  profile!:ProfileComponent

  loginForm: FormGroup;
  credentials: IAuthorization;
  payload:IUserAccounts[] = [];

  constructor(
    private service: AuthorizationService,
    private formBuilder: FormBuilder,
    private navigationApp:Router
   
  ) {
    this.loginForm = this.formBuilder.group({
      usernameInput: new FormControl("", Validators.required),
      passwordInput: new FormControl("", Validators.required),
    });
    this.credentials = {password:'',username:''}
  }
  
  async GenerateAuth() {
   
    this.credentials = {
      username:this.loginForm.get('usernameInput')?.value,
      password:this.loginForm.get('passwordInput')?.value
    }
    
    this.service.PostAuthorization(this.credentials).subscribe(
      (result: any) => {
        this.payload.pop();
        this.payload.push(result);
       
        localStorage.setItem('payload',JSON.stringify(this.payload))
        switch(this.payload[0].jwt){
          case "USER NOT FOUND":
            alert("THIS USER WAS NOT FOUND OR YOU ENTER BAD CREDENTIALS! PLEASE TRY AGAIN");
            break;
          case "NO AUTHORIZED":
            alert("BAD CREDENTIALS OR USER ACCOUNT INACTIVE, PLEASE TRY AGAIN");
            break
          default:
           
            this.profile.payloadFromLogin = 'test de props'
            console.log(this.profile.payloadFromLogin);
            
            this.navigationApp.navigateByUrl('/Menu');
          }
      },
      (error: HttpErrorResponse) => {
        alert(error.error.error.message);
      }
    );
  }

  

  ngOnInit(): void {}
}
