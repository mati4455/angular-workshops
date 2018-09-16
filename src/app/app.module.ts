import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CurrentDatetimeComponent } from './current-datetime/current-datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CurrentDatetimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
