import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile : User = new User();
  edit : boolean = false;
  editButton: string = 'Edit Mode';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe(data => {
      this.profile = data;
    });
  }

  editMode(){
    if(this.edit == true){
      this.edit = false;
      this.editButton = "Edit Mode";
    }
    else{
      this.edit = true;
      this.editButton = "Cancel"
    }
    
  }


}
