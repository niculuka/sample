import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  credentials = {username: '', password: ''};

  username: string = "";
  password: string = "";




  constructor() { }
  
  ngOnInit() { }
  
  login() {
    console.log(this.username);
    console.log(this.password);
  }

}
