import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  remove(event) {
    alert('List element clicked!');
  }
}
