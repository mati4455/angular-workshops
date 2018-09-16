import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  listElements: string[] = [];

  constructor() { }

  ngOnInit() {
    this.listElements = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
  }

}
