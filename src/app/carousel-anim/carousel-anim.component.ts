import { Component, OnInit } from '@angular/core';
import { Carousel, carouselImages } from '../../data/carousel.data';

@Component({
  selector: 'app-carousel-anim',
  templateUrl: './carousel-anim.component.html',
  styleUrls: ['./carousel-anim.component.css']
})
export class CarouselAnimComponent implements OnInit {

  images: Array<Carousel> = carouselImages;
  image: Carousel = new Carousel();

  counter: number = 0;
  startTimer: any;
  running = false;

  slide: string = "left: 0;"
 

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  start() {
    if (!this.running) {
      this.startTimer = setInterval(() => {

        this.image = this.images[this.counter]; 
        this.image.isChecked = false;

        this.counter++;
        if (this.counter > this.images.length - 1) {
          this.counter = 0;
        }

        this.image = this.images[this.counter];        
        this.slide = this.image.slide;
        this.image.isChecked = true;
        
        // console.log(this.image)    
        

        
      }, 3000);
    }
  }

  stop() {
    clearInterval(this.startTimer);
    this.running = false;
  }

  previous() {
    if (this.counter === 0) {
      this.counter = this.images.length - 1;
    }
    else {
      this.counter--;
    }
    this.slide = "left: -" + this.counter;
  }

  next() {
    if (this.counter === this.images.length - 1) {
      this.counter = 0;
    }
    else {
      this.counter++;
    }
    this.slide = "left: -" + this.counter + "00%";
  }

  getDot(image: Carousel) {
    this.counter = image.id;
    this.slide = image.slide;
    // console.log(image)
  }
}
