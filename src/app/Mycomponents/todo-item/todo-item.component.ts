import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;   //accepting the data from todos for display
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); //made our own event "todoDelete"
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);  //this will call parent and ask to delete [todos.component.html]
    console.log("onClick has been triggered")
  }

  onCheckboxClick(todo: any){
    this.todoCheckbox.emit(todo);
  }
}
