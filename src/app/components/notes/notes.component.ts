import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Note';
import { NoteListService } from 'src/app/servics/note-list.service';

@Component({
	selector: 'app-notes',
	templateUrl: './notes.component.html',
	styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
	notes: Note[] = [];
	constructor(private noteListService: NoteListService) {}

	ngOnInit(): void {
		this.noteListService.getAll().subscribe((note) => {
			this.notes = note;
		});
	}

	addNote(note: Note) {
		console.log('Add note: ', note);
		this.noteListService.addNote(note).subscribe((note) => {
			this.notes = note;
		});
	}

	deleteNote(note: Note) {
		console.log('delete emit works : ', note);
		this.noteListService.deleteNote(note).subscribe((note) => {
			this.notes = note;
		});
	}
}
