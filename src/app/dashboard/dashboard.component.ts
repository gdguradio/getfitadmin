import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  secret = "Loading...";
  constructor(private user : UserService) {

   }

  ngOnInit() {
    this.user.getSomeData().subscribe(data =>{
      this.secret = data.secret;
    })
  }

}
