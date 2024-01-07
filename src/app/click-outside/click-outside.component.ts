import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-click-outside',
  templateUrl: './click-outside.component.html',
  styleUrls: ['./click-outside.component.css']
})
export class ClickOutsideComponent implements OnInit {

  @ViewChild('txt') txt: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.txt?.nativeElement.contains(event.target)) {
      console.log("INSIDE")
    } else {
      console.log("OUTSIDE")
    }
  }

}
