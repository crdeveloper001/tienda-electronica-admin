import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserAccounts } from 'src/app/interfaces/UserAccounts';
import { UserAccountsService } from 'src/app/services/user-accounts.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userAccountForm:FormGroup;
  newUserAccount:IUserAccounts;
  constructor(private service:UserAccountsService,private formBuilder:FormBuilder) { 
    this.userAccountForm = this.formBuilder.group({
      InputId:new FormControl("",Validators.required),
      InputName:new FormControl("",Validators.required),
      InputLastName:new FormControl("",Validators.required),
      InputPhone:new FormControl("",Validators.required),
      InputEmail:new FormControl("",Validators.required),
      InputDirection:new FormControl("",Validators.required),
      InputUserAccount:new FormControl("",Validators.required),
      InputPassword:new FormControl("",Validators.required),
      InputRolType:new FormControl("",Validators.required),

    })
    this.newUserAccount = {
      _id:0,
      clientDirection:'',
      clientEmail:'',
      clientLastName:'',
      clientName:'',
      clientPassword:'',
      clientPhone:0,
      clientRoleType:'',
      clientUsername:'',
      userAccountActive:""
    }
  }

  AddNewUser(){
    this.newUserAccount = {
      _id:this.userAccountForm.get('InputId')?.value,
      clientName:this.userAccountForm.get('InputName')?.value,
      clientLastName:this.userAccountForm.get('InputLastName')?.value,
      clientPhone:this.userAccountForm.get('InputPhone')?.value,
      clientDirection:this.userAccountForm.get('InputDirection')?.value,
      clientEmail:this.userAccountForm.get('InputEmail')?.value,
      clientPassword:this.userAccountForm.get('InputPassword')?.value,
      clientRoleType:this.userAccountForm.get('InputRolType')?.value,
      clientUsername:this.userAccountForm.get('InputUserAccount')?.value,
      userAccountActive:"true"
    }

    this.service.PostUserAccount(this.newUserAccount).subscribe((result:any) =>{
      alert(JSON.stringify(result));
    },(error:HttpErrorResponse) =>{
      alert(JSON.stringify(error))
    })
  }

  
  ngOnInit(): void {
  }

}
