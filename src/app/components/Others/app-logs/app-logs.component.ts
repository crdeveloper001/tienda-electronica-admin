import { Component, OnInit } from '@angular/core';
import { IAppLogs } from 'src/app/interfaces/AppLogs';
import { AppLogsService } from 'src/app/services/app-logs.service';

@Component({
  selector: 'app-app-logs',
  templateUrl: './app-logs.component.html',
  styleUrls: ['./app-logs.component.css']
})
export class AppLogsComponent implements OnInit {

  appLogs:IAppLogs[];

  constructor(private service:AppLogsService) { 
    this.appLogs = []
    this.ShowAllLogsEvents();
  }


  ShowAllLogsEvents(){
    this.service.GetAllAppsLogs().subscribe((data:any) =>{
      this.appLogs = data;
      console.log(this.appLogs);
      
    })
  }
  ngOnInit(): void {
  }

}
