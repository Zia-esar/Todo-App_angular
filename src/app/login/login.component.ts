import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  userpwd;
  isResult;

  userList: Users[] = [
    {username: 'ali', password: 'asdf'},
    {username: 'zia', password: '1234'},
    {username: 'hammad', password: 'zxcv'},
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  addUser(){
    if(this.username !== "" && this.userpwd !== ""){
      const newUser: Users = {
        username: this.username,
        password: this.userpwd
      }
      this.userList.push(newUser);
    }else {
      console.log("All fields should be filled!!")
    }
    this.username = "";
    this.userpwd = "";

    for(let item of this.userList){
      console.log(item);
    }
  }

  login(){
    if(this.username !== "" && this.userpwd !== ""){
        var result = this.userList.filter(item => item.username == this.username && item.password == this.userpwd);
        console.log(result)
        if(result.length != 0){
        console.log("welcome");
        localStorage.setItem('user', JSON.stringify(result));
        // this.isResult = localStorage.getItem('user');
        // console.log(" Hello " + this.isResult);
        this._router.navigateByUrl('/todo');
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


