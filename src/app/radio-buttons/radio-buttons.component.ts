import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css']
})
export class RadioButtonsComponent implements OnInit {

  selectedDay!: string;
  days: string[] = ['Monday', 'Tuesday', 'Wednesday'];

  sea!: string;





  delivery: number = 10;
  pickUp: number = 2;

  deliveryWay: number = 0;

  title: string = "ng Models"

  constructor() { }

  ngOnInit(): void {
  }

}
