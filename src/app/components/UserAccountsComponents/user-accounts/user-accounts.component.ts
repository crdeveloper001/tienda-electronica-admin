import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserAccounts } from 'src/app/interfaces/UserAccounts';
import { UserAccountsService } from 'src/app/services/user-accounts.service';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent implements OnInit {
  
  userAccounts: IUserAccounts[];
  stateUserAccountActive:string='';
  constructor(private service:UserAccountsService,) { 
    this.userAccounts = [];

    this.ShowAllUserAccounts();
  }

  ShowAllUserAccounts(){
    this.service.GetAllUserAccounts().subscribe((result:any) =>{
      this.userAccounts = result;
      this.userAccounts.forEach(element => {
        if(element.userAccountActive){
          element.userAccountActive = true
        }
        if (!element.userAccountActive) {
          element.userAccountActive = false
        }
      });
    })
  }

  
  ngOnInit(): void {
  }

}
