import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { VirtualTimeScheduler } from 'rxjs';
import { Todo } from './todo';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  username;
  userpwd;

  todoValue: string;
  list: Todo[] = [];

  userList: Users[] = [
    {username: 'ali', password: 'asdf'},
    {username: 'zia', password: '1234'},
    {username: 'hammad', password: 'zxcv'},
  ];

  constructor(private modalService: NgbModal){}

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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-title'});
  }

  addUser(){
    if(this.username !== "" && this.userpwd !== ""){
      const newUser: Users = {
        username: this.username,
        password: this.userpwd
      }
      this.userList.push(newUser);
    }else {
      console.log("Fill all fields!!")
    }
    this.username = "";
    this.userpwd = "";

    for(let item of this.userList){
      console.log(item);
    }
  }

  login(){
    if(this.username !== "" && this.userpwd !== ""){
     var result = this.userList.filter(item => item.username == this.username && item.password == this.userpwd)
     console.log(result)
      if(result.length != 0){
        console.log("welcome")
      }else {
        console.log("You are not registered!!")
      }
    }else {
      console.log("All fields should be filled!!")
    }

    this.username = "";
    this.userpwd = "";

  }
}

