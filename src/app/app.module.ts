import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesAddComponent } from './components/notes-add/notes-add.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

@NgModule({
	declarations: [AppComponent, NotesComponent, NotesAddComponent, NotesListComponent],
	imports: [BrowserModule, NgbModule, FontAwesomeModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
