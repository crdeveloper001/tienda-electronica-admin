import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IUserAccounts } from "src/app/interfaces/UserAccounts";
import { UserAccountsService } from "src/app/services/user-accounts.service";

@Component({
  selector: "app-user-accounts",
  templateUrl: "./user-accounts.component.html",
  styleUrls: ["./user-accounts.component.css"],
})
export class UserAccountsComponent implements OnInit {
  userAccounts: IUserAccounts[];
  updateUserAccount: IUserAccounts;
  updateAccountForm: FormGroup;
  stateUserAccountActive: string = "";
  stateUpdateUserAccount: boolean = false;
  userAccountName: string = "";
  dynamicId: Number = 0;
  constructor(
    private service: UserAccountsService,
    private formBuilder: FormBuilder
  ) {
    this.userAccounts = [];
    this.ShowAllUserAccounts();
    this.updateAccountForm = this.formBuilder.group({
      InputName: new FormControl("", Validators.required),
      InputLastName: new FormControl("", Validators.required),
      InputPhone: new FormControl("", Validators.required),
      InputEmail: new FormControl("", Validators.required),
      InputDirection: new FormControl("", Validators.required),
      InputUserAccount: new FormControl("", Validators.required),
      InputPassword: new FormControl("", Validators.required),
      InputRolType: new FormControl("", Validators.required),
      InputActiveAccount: new FormControl("", Validators.required),
    });
    this.updateUserAccount = {
      _id: 0,
      clientDirection: "",
      clientEmail: "",
      clientLastName: "",
      clientName: "",
      clientPassword: "",
      clientPhone: 0,
      clientRoleType: "",
      clientUsername: "",
      userAccountActive: false,
    };
  }
  /**Muestra la informacion de las cuentas activas e inactivas en el sistema */
  ShowAllUserAccounts() {
    this.service.GetAllUserAccounts().subscribe((result: any) => {
      this.userAccounts = result;
      this.userAccounts.forEach((element) => {
        if (element.userAccountActive) {
          element.userAccountActive = true;
        }
        if (!element.userAccountActive) {
          element.userAccountActive = false;
        }
      });
    });
  }

  /**Obtiene dinamicamente la informacion seleccionada del usuario y lo coloca en el formulario reactivo */
  GetCurrentUserPayload(item: IUserAccounts) {
    this.dynamicId = item._id;
    this.userAccountName = item.clientUsername;
    this.updateAccountForm.get("InputId")?.setValue(item._id);
    this.updateAccountForm.get("InputName")?.setValue(item.clientName);
    this.updateAccountForm.get("InputLastName")?.setValue(item?.clientLastName);
    this.updateAccountForm.get("InputPhone")?.setValue(item?.clientPhone);
    this.updateAccountForm.get("InputEmail")?.setValue(item?.clientEmail);
    this.updateAccountForm
      .get("InputDirection")
      ?.setValue(item?.clientDirection);
    this.updateAccountForm
      .get("InputUserAccount")
      ?.setValue(item?.clientUsername);
    this.updateAccountForm.get("InputPassword")?.setValue(item.clientPassword);
  }
  /**Actualiza la informacion del usuario con la informacion seleccionada */
  UpdateCurrentUserAccount() {
    let activeOrNo: boolean;
    const status = this.updateAccountForm.get("InputActiveAccount")?.value;

    switch (status) {
      case "Activo":
        activeOrNo = true;
        break;
      case "Inactivo":
        activeOrNo = false;
        break;
      default:
        activeOrNo = false;
    }

    this.updateUserAccount = {
      _id: this.dynamicId,
      clientName: this.updateAccountForm.get("InputName")?.value,
      clientLastName: this.updateAccountForm.get("InputLastName")?.value,
      clientPhone: this.updateAccountForm.get("InputPhone")?.value,
      clientDirection: this.updateAccountForm.get("InputDirection")?.value,
      clientEmail: this.updateAccountForm.get("InputEmail")?.value,
      clientPassword: this.updateAccountForm.get("InputPassword")?.value,
      clientRoleType: this.updateAccountForm.get("InputRolType")?.value,
      clientUsername: this.updateAccountForm.get("InputUserAccount")?.value,
      userAccountActive: activeOrNo,
    };

    this.service.PutUserAccount(this.updateUserAccount).subscribe(
      (result: any) => {
        alert(JSON.stringify(result));

      },
      (error: HttpErrorResponse) => {
        let resultMessage = error.error.text;

        switch (resultMessage) {
          case "User account updated":
            this.stateUpdateUserAccount = true
            setTimeout(() => {
              this.stateUpdateUserAccount = false
            }, 5000);


            break;
          default:
            this.stateUpdateUserAccount = false;
            break;
        }
      }
    );
  }

  DeleteUserAccount() {
    let userConfirmation = confirm(
      "Estas seguro que quieres eliminar este usuario?"
    );

    if (userConfirmation) {
      this.service.DeleteUserAccount(this.dynamicId).subscribe(
        (result: any) => {
          alert(JSON.stringify(result));
        },
        (error: HttpErrorResponse) => {
          alert(JSON.stringify(error.error.text));
        }
      );
    } else {
      alert("No se elimino el usuario");
    }
  }
  ngOnInit(): void { }
}
