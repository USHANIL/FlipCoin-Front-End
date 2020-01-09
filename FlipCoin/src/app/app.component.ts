import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string;

  constructor(private router: Router, private authenticate: AuthenticationService) { }

  displayDashboard() {
    return this.authenticate.isUserLoggedIn();
  }
  displayPreLoginHeader() {
    return this.authenticate.isUserLoggedIn();
  }
}