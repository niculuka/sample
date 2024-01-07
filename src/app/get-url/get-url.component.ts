import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-url',
  templateUrl: './get-url.component.html',
  styleUrls: ['./get-url.component.css']
})
export class GetUrlComponent implements OnInit {

  currentURL: string = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe(() => {
      this.currentURL = this.router.url;

      console.log(this.currentURL );
    });

    
  }







  ngOnInit(): void {
  }

}
