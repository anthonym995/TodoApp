import { Component, OnInit } from '@angular/core';
import { Todo } from './../../app/model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos?:Todo[];
  public inputTodo?:string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }

  toggleDone(id: number) {
    this.todos?.map( (v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos?.filter((v,i) => i !==id);
  }

  addTodo(){
    this.todos?.push({
      content:this.inputTodo,
      completed:false
    });

    this.inputTodo = "";
  }
}
