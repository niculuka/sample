import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-sebastian',
  templateUrl: './navbar-sebastian.component.html',
  styleUrls: ['./navbar-sebastian.component.css']
})
export class NavbarSebastianComponent implements OnInit {
  
  wide = false;
  //checked!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  wideMenu(): void {
    this.wide = !this.wide;
  }

  // public saveChecked(value: boolean) {
  //   this.checked = value;
  // }


}
