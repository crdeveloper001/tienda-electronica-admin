import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IAppLogs } from "src/app/interfaces/AppLogs";
import { IAuthorization } from "src/app/interfaces/Authorization";
import { IUserAccounts } from "src/app/interfaces/UserAccounts";
import { AppLogsService } from "src/app/services/app-logs.service";
import { AuthorizationService } from "src/app/services/authorization.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials: IAuthorization;
  payload: IUserAccounts[] = [];
  appLogsNew: IAppLogs;

  constructor(
    private service: AuthorizationService,
    private appLogsService: AppLogsService,
    private formBuilder: FormBuilder,
    private navigationApp: Router
  ) {
    this.loginForm = this.formBuilder.group({
      usernameInput: new FormControl("", Validators.required),
      passwordInput: new FormControl("", Validators.required),
    });
    this.credentials = { password: "", username: "" };
    const dateSys = new Date();
    dateSys.toLocaleDateString("en-US");

    this.appLogsNew = {
      eventType: "Autenticacion",
      eventDescription:
        "Intento de autenticacion en el app administrador por: " +
        this.loginForm.get("usernameInput")?.value,
      eventDate: `Fecha: ${dateSys.getDate()}/${dateSys.getMonth()}/${dateSys.getFullYear()} Hora: ${dateSys.getHours()}:${dateSys.getMinutes()}`,
    };
  }

  async GenerateAuth() {
    this.appLogsService
      .PostAppLogs(this.appLogsNew)
      .subscribe((result: any) => {
        console.log(result);
      });

    this.credentials = {
      username: this.loginForm.get("usernameInput")?.value,
      password: this.loginForm.get("passwordInput")?.value,
    };

    this.service.PostAuthorization(this.credentials).subscribe(
      (result: any) => {
        this.payload.pop();
        this.payload.push(result);

        localStorage.setItem("payload", JSON.stringify(this.payload));
        switch (this.payload[0].jwt) {
          case "USER NOT FOUND":
            alert(
              "THIS USER WAS NOT FOUND OR YOU ENTER BAD CREDENTIALS! PLEASE TRY AGAIN"
            );
            break;
          case "NO AUTHORIZED":
            alert("BAD CREDENTIALS OR USER ACCOUNT INACTIVE, PLEASE TRY AGAIN");
            break;
          default:
            this.navigationApp.navigateByUrl("/Profile");
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.error.error.message);
      }
    );
  }

  ngOnInit(): void {}
}
