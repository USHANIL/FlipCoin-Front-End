import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from 'app/models/notes';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { NotesService } from 'app/services/notes.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  // @Input() note : Notes;
  // @Output() focusOut: EventEmitter<Notes> = new EventEmitter<Notes>();
  newNote: Notes = new Notes();
  updateTheNote: Notes = new Notes();
  notes = [];
  showEditTable: boolean = false;
  editRowId: any = ' ';

  constructor(
    private noteService: NotesService,
    private route: Router
    ) { }


  ngOnInit() {
  
    this.noteService.getNotes().subscribe(data => this.notes = data);
  }

  saveNote() {
    this.noteService.save(this.newNote).subscribe(data => this.ngOnInit());
    this.newNote.note = '';
  }

  deleteNote(id){
    this.noteService.removeNotes(id).subscribe((data) => this.ngOnInit());
  }

  updateNote(){
    
    this.noteService.update(this.editRowId, this.updateTheNote).subscribe(data => this.ngOnInit());
    this.updateTheNote.note = ' ';
    this.editRowId = ' ';
  }

  Edit(id){
    this.editRowId = id;
  }



  

  

  






}
