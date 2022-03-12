import { Injectable, OnInit } from '@angular/core';
import { Note } from '../Note';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NoteListService implements OnInit {
	notes: Note[] = [];

	ngOnInit(): void {}

	// getting data from localstorage and setting them in notes array
	constructor() {
		// @ts-ignore
		// @ts-nocheck
		this.notes = JSON?.parse(localStorage?.getItem('notes'));
	}
	getAll(): Observable<Note[]> {
		const items = of(this.notes);
		return items;
	}

	addNote(note: Note): Observable<Note[]> {
		this.notes?.push(note);
		const newNotes = this.notes;
		// updates the note list item in local storage
		localStorage.setItem('notes', JSON.stringify(this.notes));
		return of(newNotes);
	}

	deleteNote(note: Note): Observable<Note[]> {
		// traverse through the notes array and deletes the object matching the passed object id
		for (let i = 0; i < this.notes.length; i++) {
			if (this.notes[i].id == note.id) {
				this.notes.splice(i, 1);
			}
		}
		// updates the note list item in local storage
		localStorage.setItem('notes', JSON.stringify(this.notes));
		return of(this.notes);
	}
}
