import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticate: AuthenticationService) { }

  ngOnInit() {

  }

  logout(){
    this.authenticate.logOut();
  }
 

}
