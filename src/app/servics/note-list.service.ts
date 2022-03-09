import { Injectable } from '@angular/core';
import { Note } from '../Note';
import { Observable, of } from 'rxjs';

const noteList: Note[] = [
	{
		id: Math.floor(Math.random() * 10000 + 1),
		title: 'Download Movies',
		desc: 'download movies from torrentBD or CrazyHD',
	},
	{
		id: Math.floor(Math.random() * 10000 + 1),
		title: 'Go shopping',
		desc: 'buy some shirts, pants and shoes from market',
	},
];

@Injectable({
	providedIn: 'root',
})
export class NoteListService {
	notes: Note[] = noteList;
	constructor() {}

	getAll(): Observable<Note[]> {
		const items = of(this.notes);
		return items;
	}

	addNote(note: Note): Observable<Note[]> {
		this.notes.push(note);
		const newNotes = this.notes;
		return of(newNotes);
	}

	deleteNote(note: Note): Observable<Note[]> {
		// traverse through the notes array and deletes the object matching the passed object id
		for (let i = 0; i < this.notes.length; i++) {
			if (this.notes[i].id == note.id) {
				this.notes.splice(i, 1);
			}
		}
		return of(this.notes);
	}
}
