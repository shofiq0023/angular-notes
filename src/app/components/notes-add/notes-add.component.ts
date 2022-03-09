import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/Note';

@Component({
	selector: 'app-notes-add',
	templateUrl: './notes-add.component.html',
	styleUrls: ['./notes-add.component.css'],
})
export class NotesAddComponent implements OnInit {
	@Output() onAddNote: EventEmitter<Note> = new EventEmitter();
	title!: string;
	desc!: string;
	faPlus = faPlus;

	constructor() {}

	ngOnInit(): void {}

	onSubmit() {
		if (!this.title && !this.desc) {
			alert('please add a note');
		}

		const newNote: Note = {
			id: Math.floor(Math.random() * 100000 + 1),
			title: this.title,
			desc: this.desc,
		};

		this.onAddNote.emit(newNote);

		this.title = '';
		this.desc = '';
	}
}
