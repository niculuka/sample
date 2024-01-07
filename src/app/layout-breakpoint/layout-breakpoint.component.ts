import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout-breakpoint',
  templateUrl: './layout-breakpoint.component.html',
  styleUrls: ['./layout-breakpoint.component.css']
})
export class LayoutBreakpointComponent {

  destroyed = new Subject<void>();
  currentScreenSize: string = "";

  displayNameMap = new Map([
    ["(max-width: 599.98px)", 'XSmall'],
    ["(min-width: 600px) and (max-width: 959.98px)", 'Small'],
    ["(min-width: 960px) and (max-width: 1299.98px)", 'Medium'],
    ["(min-width: 1300px) and (max-width: 1499.98px)", 'Large'],
    ["(min-width: 1500px)", 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        "(max-width: 599.98px)",
        "(min-width: 600px) and (max-width: 959.98px)",
        "(min-width: 960px) and (max-width: 1299.98px)",
        "(min-width: 1300px) and (max-width: 1499.98px)",
        "(min-width: 1500px)",
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            console.log(this.currentScreenSize);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
