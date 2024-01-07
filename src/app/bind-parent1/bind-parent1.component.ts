import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind-parent1',
  templateUrl: './bind-parent1.component.html',
  styleUrls: ['./bind-parent1.component.css']
})
export class BindParent1Component implements OnInit {



  parentMessage: string = "parentMessage";

  parentMessageArray: any = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Doe",
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }


}
