import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timePeriods = [
    // 'Bronze age',
    // 'Iron age',
    // 'Middle ages',
    // 'Early modern period',
    // 'Long nineteenth century',
    'assets/cars/audi_1.jpg',
    'assets/cars/audi_2.jpg',
    'assets/cars/audi_3.jpg',
    'assets/cars/audi_4.jpg',
    'assets/cars/audi_5.jpg',
    'assets/cars/audi_6.jpg',
    'assets/cars/audi_7.jpg',
    'assets/cars/audi_8.jpg',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);

    console.log(event)
  }
}
