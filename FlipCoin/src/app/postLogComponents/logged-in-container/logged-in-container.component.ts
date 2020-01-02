import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-logged-in-container',
  templateUrl: './logged-in-container.component.html',
  styleUrls: ['./logged-in-container.component.css']
})
export class LoggedInContainerComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UserService, 
    private authenticate: AuthenticationService,
    ) { }

  ngOnInit() {
    this.userService.getUser(this.authenticate.getUser()).subscribe( e => this.user = e);
    
  }

}
