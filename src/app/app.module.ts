import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CurrentDatetimeComponent } from './current-datetime/current-datetime.component';
import { TodoListElementComponent } from './todo-list-element/todo-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CurrentDatetimeComponent,
    TodoListElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
