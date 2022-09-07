 import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cwh-todo-list';

  constructor(){
    // setTimeout(() => {
    //   this.title = "New Title" ;
    // }, 2000);

  }
}
