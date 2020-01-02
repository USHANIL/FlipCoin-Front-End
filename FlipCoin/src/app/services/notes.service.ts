import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../models/notes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url: string = "http://localhost:8080/user";

  constructor(private http:HttpClient) { }

  getNotes(id: number): Observable<Notes[]>{
    return this.http.get<Notes[]>(this.url + "/" + id + "/notes");
  }

  removeNotes(id): Observable<Notes[]> {
    return this.http.delete<Notes[]>(this.url + "/notes/" + id + "/delete");
  } 

  save(note : Notes, id: number){
    return this.http.post<Notes>(this.url + "/" + id + "/note", note);
  }
}
