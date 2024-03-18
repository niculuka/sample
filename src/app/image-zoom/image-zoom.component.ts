import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent{

  public mousePosition: string = "";
  public imageScale: string = "";


  public log(event: any) {

    console.log(event.target)

    this.mousePosition = `${event.clientX - event.target.offsetLeft}px ${event.clientY - event.target.offsetTop}px `;
    this.imageScale = 'scale(3)';
  }

  out() {
    this.mousePosition = `0 0`;
    this.imageScale = 'scale(1)';
  }
  
}
