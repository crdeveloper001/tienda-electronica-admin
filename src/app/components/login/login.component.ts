import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IAuthorization } from "src/app/interfaces/Authorization";
import { AuthorizationService } from "src/app/services/authorization.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials: IAuthorization;

  constructor(
    private service: AuthorizationService,
    private formBuilder: FormBuilder
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
    
    await this.service.PostAuthorization(this.credentials).subscribe(
      (result: any) => {
        console.log(result);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.error.error.message);
      }
    );
  }

  ngOnInit(): void {}
}
