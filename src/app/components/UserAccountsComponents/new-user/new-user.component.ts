import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserAccounts } from 'src/app/interfaces/UserAccounts';
import { AttachmentsService } from 'src/app/services/attachments.service';
import { UserAccountsService } from 'src/app/services/user-accounts.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userAccountForm: FormGroup;
  newUserAccount: IUserAccounts;
  resultUpload: string = '';
  selectedFile: File | null = null;
  profilePhoto: any
  constructor(private service: UserAccountsService, private uploadFile: AttachmentsService, private formBuilder: FormBuilder) {
    this.userAccountForm = this.formBuilder.group({
      InputUriProfile: new FormControl(''),
      InputId: new FormControl("", Validators.required),
      InputName: new FormControl("", Validators.required),
      InputLastName: new FormControl("", Validators.required),
      InputPhone: new FormControl("", Validators.required),
      InputEmail: new FormControl("", Validators.required),
      InputDirection: new FormControl("", Validators.required),
      InputUserAccount: new FormControl("", Validators.required),
      InputPassword: new FormControl("", Validators.required),
      InputRolType: new FormControl("", Validators.required),

    })
    this.newUserAccount = {
      _id: 0,
      clientDirection: '',
      clientEmail: '',
      clientLastName: '',
      clientName: '',
      clientPassword: '',
      clientPhone: 0,
      clientRoleType: '',
      clientUsername: '',

      userAccountActive: false
    }


  }
  async onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      //console.log(formData);
      await (await this.uploadFile.PostAttachImage(formData)).subscribe(
        (result: string) => {
          this.userAccountForm.get('InputUriProfile')?.patchValue(result)

        },
        (error: HttpErrorResponse) => {

          this.userAccountForm.get('InputUriProfile')?.patchValue(error.error.text)

        }


      )


    }
  }


  async AddNewUser() {
    
    this.newUserAccount = {
      _id: this.userAccountForm.get('InputId')?.value,
      clientName: this.userAccountForm.get('InputName')?.value,
      clientUriProfile: this.userAccountForm.get('InputUriProfile')?.value,
      clientLastName: this.userAccountForm.get('InputLastName')?.value,
      clientPhone: this.userAccountForm.get('InputPhone')?.value,
      clientDirection: this.userAccountForm.get('InputDirection')?.value,
      clientEmail: this.userAccountForm.get('InputEmail')?.value,
      clientPassword: this.userAccountForm.get('InputPassword')?.value,
      clientRoleType: this.userAccountForm.get('InputRolType')?.value,
      clientUsername: this.userAccountForm.get('InputUserAccount')?.value,
      //userAccountActive:"true"
    }

    await (await this.service.PostUserAccount(this.newUserAccount)).subscribe((result: any) => {
      alert(JSON.stringify(result));
    }, (error: HttpErrorResponse) => {
      alert(JSON.stringify(error))
    })
  }

  async CompleteRegisterUser() {
    await this.AddNewUser()
    
  }


  ngOnInit(): void {
  }

}
