import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component"; 

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  localItem: string | null;
  todos:Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
         this.todos = []
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
      
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
   addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  
}
