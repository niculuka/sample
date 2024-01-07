import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent implements OnInit {

  decimalNumber: number = 1.123456;

  doubleNumber = this.decimalNumber.toFixed(2);

  constructor() { }

  ngOnInit(): void {
  }

}
