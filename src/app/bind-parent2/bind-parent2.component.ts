import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-parent2',
  templateUrl: './bind-parent2.component.html',
  styleUrls: ['./bind-parent2.component.css']
})
export class BindParent2Component implements OnInit {

 
 
  getChildMessage: string = ""

  

  constructor() { }

  ngOnInit(): void {
  }

  receiveEvent($event: any) {
    this.getChildMessage = $event;
  }


}
