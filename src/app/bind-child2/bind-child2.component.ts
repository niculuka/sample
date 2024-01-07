import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bind-child2',
  templateUrl: './bind-child2.component.html',
  styleUrls: ['./bind-child2.component.css']
})
export class BindChild2Component implements OnInit {



  childMessage: string = "childMessage";

  @Output()
  childMessageEvent = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  send() {
    this.childMessageEvent.emit(this.childMessage);
  }

}
