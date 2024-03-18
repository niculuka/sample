import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-object-child',
  templateUrl: './bind-object-child.component.html',
  styleUrls: ['./bind-object-child.component.css']
})
export class BindObjectChildComponent {

  @Input() drivers: any;

  constructor() {
    console.log(this.drivers)
  }


}
