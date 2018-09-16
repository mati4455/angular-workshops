import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListElement } from '../model/list-element.model';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {

  @Input() data: ListElement;
  @Output() removeItem: EventEmitter<ListElement> = new EventEmitter<ListElement>();

  removed = false;

  constructor() { }

  ngOnInit() {
  }

  remove(event) {
    this.removed = true;
    this.removeItem.emit(this.data);
  }
}
