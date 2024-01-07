import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bind-child1',
  templateUrl: './bind-child1.component.html',
  styleUrls: ['./bind-child1.component.css']
})
export class BindChild1Component implements OnInit {



  @Input() getParentMessage: string = "";

  @Input() getParentMessageArray: any = [];


  
  constructor() { }

  ngOnInit(): void {
    console.log(this.getParentMessage)
    console.log(this.getParentMessageArray)
  }


}
