import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-delete-all-todo',
  templateUrl: './delete-all-todo.component.html',
  styleUrls: ['./delete-all-todo.component.css']
})
export class DeleteAllTodoComponent implements OnInit {
  @Output() todoDeleteAll: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAll(){
    this.todoDeleteAll.emit();  
    console.log("onDeleteAll has been triggered")
  }

}
