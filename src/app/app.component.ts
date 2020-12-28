import { Component, OnInit, ViewChild } from '@angular/core';

import { VirtualTimeScheduler } from 'rxjs';
import { LogInModalComponent } from './log-in-modal/log-in-modal.component';
import { Todo } from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todoValue: string;
  list: Todo[] = [];

  @ViewChild(LogInModalComponent) myModal: LogInModalComponent;

  constructor(){}

  ngOnInit(){
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

  openModal(){
    this.myModal.open();
  }
}

