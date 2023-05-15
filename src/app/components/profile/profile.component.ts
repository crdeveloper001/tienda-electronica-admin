import { Component, Input, OnInit } from '@angular/core';
import { IAuthorization } from 'src/app/interfaces/Authorization';
import { IUserAccounts } from 'src/app/interfaces/UserAccounts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  payloadFromLogin: string;

  constructor() { 
    this.payloadFromLogin = '';
  }

  ngOnInit(): void {
  }

}
