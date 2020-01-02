import { Component, OnInit, Input } from '@angular/core';
import { Notes } from 'app/models/notes';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { NotesService } from 'app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  user: User;
  newNote: Notes = new Notes();
  notes = []

  constructor(
    private userService: UserService, 
    private authenticate: AuthenticationService,
    private noteService: NotesService
  ) { }


  ngOnInit() {
    this.getUser();
    this.noteService.getNotes(this.user.userId).subscribe(data => this.notes = data);
  }

  saveNote() {
    this.noteService.save(this.newNote, this.user.userId).subscribe(data => this.ngOnInit());
  }

  deleteNote(id){
    this.noteService.removeNotes(id).subscribe((data) => this.ngOnInit());
  }

  getUser(){
    this.userService.getUser(this.authenticate.getUser()).subscribe(data => this.user = data);
  }






}
