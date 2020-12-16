import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../users';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.css']
})
export class LogInModalComponent implements OnInit {

  username;
  userpwd;

  // @Output() myModal = new EventEmitter();

  userList: Users[] = [
    {username: 'ali', password: 'asdf'},
    {username: 'zia', password: '1234'},
    {username: 'hammad', password: 'zxcv'},
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-title'});
    // this.myModal.emit(this.modalService.open(content, {ariaLabelledBy: 'modal-title'}));
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
