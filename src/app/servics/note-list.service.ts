import { Injectable, OnInit } from '@angular/core';
import { Note } from '../Note';
import { Observable, of } from 'rxjs';

// @ts-ignore
// @ts-nocheck

@Injectable({
	providedIn: 'root',
})
export class NoteListService implements OnInit {
	ngOnInit(): void {
		if (this.notes) {
			// @ts-ignore
			// @ts-nocheck
			this.notes = JSON?.parse(localStorage?.getItem('notes'));
		}
	}
	notes: Note[] = [];

	constructor() {}
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
