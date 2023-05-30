import { HttpErrorResponse } from "@angular/common/http";
import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IAuthorization } from "src/app/interfaces/Authorization";
import { IUserAccounts } from "src/app/interfaces/UserAccounts";
import { UserAccountsService } from "src/app/services/user-accounts.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  payloadFromLogin: any;
  payloadUpdateProfile: IUserAccounts;
  stateActiveAccount: string = "";
  stateActiveAlertPassword: boolean = false;
  formUpdateProfile: FormGroup;

  constructor(
    private builderForm: FormBuilder,
    private service: UserAccountsService
  ) {
    this.formUpdateProfile = this.builderForm.group({
      InputName: new FormControl("", Validators.required),
      InputLastName: new FormControl("", Validators.required),
      InputPhone: new FormControl("", Validators.required),
      InputEmail: new FormControl("", Validators.required),
      InputDirection: new FormControl("", Validators.required),
      InputUserAccount: new FormControl("", Validators.required),
      InputPassword: new FormControl("", Validators.required),
      InputPasswordConfirm: new FormControl("", Validators.required),
    });

    this.payloadUpdateProfile = {
      _id: 0,
      clientDirection: "",
      clientEmail: "",
      clientLastName: "",
      clientName: "",
      clientPassword: "",
      clientPhone: 0,
      clientRoleType: "",
      clientUsername: "",
    };
  }

  updateProfile() {
    this.payloadUpdateProfile = {
      _id: this.payloadFromLogin[0]?._id,
      clientName: this.formUpdateProfile.get("InputName")?.value,
      clientLastName: this.formUpdateProfile.get("InputLastName")?.value,
      clientPhone: this.formUpdateProfile.get("InputPhone")?.value,
      clientDirection: this.formUpdateProfile.get("InputDirection")?.value,
      clientEmail: this.formUpdateProfile.get("InputEmail")?.value,
      clientPassword: this.formUpdateProfile.get("InputPassword")?.value,
      clientRoleType: "Administrator",
      clientUsername: this.formUpdateProfile.get("InputUserAccount")?.value,
      userAccountActive:true
    };

    let RepeatPassword = this.formUpdateProfile.get(
      "InputPasswordConfirm"
    )?.value;

    if (
      this.formUpdateProfile.get("InputPassword")?.value !==
      this.formUpdateProfile.get("InputPasswordConfirm")?.value
    ) {
      this.stateActiveAlertPassword = true;
      setTimeout(() => {
        this.stateActiveAlertPassword = false;
      }, 5000);
    }
    if (
      this.formUpdateProfile.get("InputPassword")?.value ===
      this.formUpdateProfile.get("InputPasswordConfirm")?.value
    ) {
      this.service.PutUserAccount(this.payloadUpdateProfile).subscribe(
        (result: any) => {},
        (error: HttpErrorResponse) => {
          alert(
            "OCURRIO UN ERROR AL ACTUALIZAR LA INFORMACION:" +
              JSON.stringify(error.error.text)
          );
        }
      );
    }
  }

  ngOnInit(): void {
    const storedDataProfile = localStorage.getItem("payload");

    if (storedDataProfile) {
      this.payloadFromLogin = JSON.parse(storedDataProfile);
      this.payloadFromLogin[0].clientPassword = null;

      if (this.payloadFromLogin[0]?.userAccountActive) {
        this.stateActiveAccount = "Activo";
      } else {
        this.stateActiveAccount = "Inactivo";
      }
    }
  }
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
