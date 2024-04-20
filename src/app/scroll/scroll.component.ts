import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent {

  navbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log('OUT ', window.scrollY);
    if (window.scrollY > 200) this.navbarFixed = true;
    else this.navbarFixed = false;
  }

}
