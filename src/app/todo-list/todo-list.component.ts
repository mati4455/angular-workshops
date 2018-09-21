import { Component, OnInit } from '@angular/core';
import { ListElement } from '../model/list-element.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  listElements: ListElement[] = [];

  constructor() { }

  ngOnInit() {
    this.listElements = [
      new ListElement('Item 1'),
      new ListElement('Item 2', true),
      new ListElement('Item 3')
    ];
  }

  add(title: string): void {
    this.listElements.push(new ListElement(title));
  }

  remove(index: number): void {
    this.listElements.splice(index, 1);
  }

}
