import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDentComponent } from './navbar-dent/navbar-dent.component';
import { NavbarSebastianComponent } from './navbar-sebastian/navbar-sebastian.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableWrapCellsComponent } from './table-wrap-cells/table-wrap-cells.component';
import { FormBuildingComponent } from './form-building/form-building.component';
import { BindChild1Component } from './bind-child1/bind-child1.component';
import { BindChild2Component } from './bind-child2/bind-child2.component';
import { BindParent1Component } from './bind-parent1/bind-parent1.component';
import { BindParent2Component } from './bind-parent2/bind-parent2.component';
import { DoubleComponent } from './double/double.component';
import { NavbarMatComponent } from './navbar-mat/navbar-mat.component';
import { MatMenuModule } from '@angular/material/menu';
import { ClickOutsideComponent } from './click-outside/click-outside.component';
import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { HomeComponent } from './home/home.component';
import { LayoutBreakpointComponent } from './layout-breakpoint/layout-breakpoint.component';
import { TabComponent } from './tab/tab.component';
import { NavbarNepalComponent } from './navbar-nepal/navbar-nepal.component';
import { LayoutFlexComponent } from './layout-flex/layout-flex.component';
import { CarouselAnimComponent } from './carousel-anim/carousel-anim.component';
import { InputDesignComponent } from './input-design/input-design.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { MegaMenuDropComponent } from './mega-menu-drop/mega-menu-drop.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { GetUrlComponent } from './get-url/get-url.component';
import { MegaMenuHoverComponent } from './mega-menu-hover/mega-menu-hover.component';
import { MegaMenuClickComponent } from './mega-menu-click/mega-menu-click.component';
import { TableMatSorterComponent } from './table-mat-sorter/table-mat-sorter.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormTemplateComponent } from './form-template/form-template.component';
import { BindObjectParentComponent } from './bind-object-parent/bind-object-parent.component';
import { BindObjectChildComponent } from './bind-object-child/bind-object-child.component';
import { RandomComponent } from './random/random.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { ScrollComponent } from './scroll/scroll.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropGridComponent } from './drag-drop-grid/drag-drop-grid.component';
import { DragDndGridComponent } from './drag-dnd-grid/drag-dnd-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDentComponent,
    HomeComponent,
    NavbarNepalComponent,
    NavbarSebastianComponent,
    RadioButtonsComponent,
    TableWrapCellsComponent,
    FormBuildingComponent,
    FormGroupComponent,
    BindParent1Component,
    BindChild1Component,
    BindChild2Component,
    BindParent2Component,
    DoubleComponent,
    NavbarMatComponent,
    NgModelComponent,
    ClickOutsideComponent,
    CarouselPauseComponent,
    LayoutBreakpointComponent,
    LayoutFlexComponent,
    TabComponent,
    CarouselAnimComponent,
    InputDesignComponent,
    MegaMenuComponent,
    MegaMenuDropComponent,
    NgForComponent,
    GetUrlComponent,
    MegaMenuHoverComponent,
    MegaMenuClickComponent,
    TableMatSorterComponent,
    FormTemplateComponent,
    BindObjectParentComponent,
    BindObjectChildComponent,
    RandomComponent,
    ImageZoomComponent,
    ScrollComponent,
    DragAndDropComponent,
    DragDropGridComponent,
    DragDndGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    NgbModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export class NgbdCarouselPauseModule { }