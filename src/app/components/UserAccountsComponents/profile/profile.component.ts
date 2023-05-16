import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IAuthorization } from 'src/app/interfaces/Authorization';
import { IUserAccounts } from 'src/app/interfaces/UserAccounts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  payloadFromLogin: any;
  stateActiveAccount:string = '';

  showModal = false;
  
  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
  }

  constructor() { 
   
  }

  ngOnInit(): void {
    const storedDataProfile = localStorage.getItem('payload');

    if(storedDataProfile){
      this.payloadFromLogin = JSON.parse(storedDataProfile);
      this.payloadFromLogin[0].clientPassword = null;
      console.log(this.payloadFromLogin);
      if(this.payloadFromLogin[0]?.userAccountActive){
        this.stateActiveAccount = "Activo"
      }else{
        this.stateActiveAccount = "Inactivo"
      }
    }

    
    
  }
 

}
