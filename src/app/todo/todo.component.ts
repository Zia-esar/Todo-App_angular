import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoValue: string;
  list: Todo[] = [];
  userTitle = JSON.parse(localStorage.getItem('user'));
  user = this.userTitle[0].username;

  constructor(private _router: Router) { }

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

  logOut(){
    localStorage.clear();
    this._router.navigateByUrl('/');
  }

}
