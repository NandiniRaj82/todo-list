import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';
import { AddTodoComponent } from "../add-todo/add-todo.component"; // make sure this matches your actual filename casing

@Component({
  selector: 'app-todo-item',
  standalone: true,
  // Remove Todo from imports because it's not a component/module
  imports: [AddTodoComponent],  
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'] // fix here from 'styleUrl' to 'styleUrls'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onclick has been triggered");
  } 

}
