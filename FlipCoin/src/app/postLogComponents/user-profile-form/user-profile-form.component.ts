import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from 'app/models/user';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';



@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnInit {

  profile: User;

  constructor(
    private userProfile: UserProfileComponent,
    private userService: UserService,
    private route: Router,
    private authenticate: AuthenticationService
    ) { 
    this.profile = userProfile.profile;
  }

  ngOnInit() {
  }

  updateForm(){
    this.userService.updateUser(this.profile).subscribe(data => this.userProfile.ngOnInit());
    this.userProfile.edit = false;
    if(this.profile.username != sessionStorage.getItem('username')){
      alert("Username has been changed, you're being redirected to log in")
      this.route.navigateByUrl('login');
      this.authenticate.logOut();
    }
  }

 

}
