import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
    
   }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){ 
    console.log(todo); 
    //delete that particular todo from javascript array
    const index = this.todos.indexOf(todo); //we get index
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){ 
    console.log(todo); 
    //add that particular todo coming from or emitted by add-Todocomp.ts
    const index = this.todos.indexOf(todo); //we get index
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteAllTodo(){ 
    // const index = this.todos.indexOf(todo);
    for(let i = 0; i < this.todos.length; i++){
      this.todos.splice(i);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  
  toggleTodo(todo: Todo){ 
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }

}
