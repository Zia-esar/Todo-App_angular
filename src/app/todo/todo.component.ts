import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoValue: string;
  list: Todo[] = [];
  userTitle = "Todo App";

  constructor() { }

  ngOnInit(): void {
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue !== ""){
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      }
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }

}
