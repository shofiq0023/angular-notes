import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NoteListService } from 'src/app/servics/note-list.service';
import { Note } from '../../Note';

@Component({
	selector: 'app-notes-list',
	templateUrl: './notes-list.component.html',
	styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {
	@Input() notes?: Note[];
	@Output() onDelete: EventEmitter<Note> = new EventEmitter();
	faTrash = faTrash;

	constructor(private noteListService: NoteListService) {}

	ngOnInit(): void {}

	onDeleteClick(note: Note) {
		this.onDelete.emit(note);
	}
}
