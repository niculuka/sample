import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuildingComponent } from './form-building/form-building.component';
import { NavbarSebastianComponent } from './navbar-sebastian/navbar-sebastian.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { TableWrapCellsComponent } from './table-wrap-cells/table-wrap-cells.component';
import { BindChild1Component } from './bind-child1/bind-child1.component';
import { BindChild2Component } from './bind-child2/bind-child2.component';
import { BindParent1Component } from './bind-parent1/bind-parent1.component';
import { BindParent2Component } from './bind-parent2/bind-parent2.component';
import { DoubleComponent } from './double/double.component';
import { ClickOutsideComponent } from './click-outside/click-outside.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { HomeComponent } from './home/home.component';
import { LayoutBreakpointComponent } from './layout-breakpoint/layout-breakpoint.component';
import { TabComponent } from './tab/tab.component';
import { NavbarNepalComponent } from './navbar-nepal/navbar-nepal.component';
import { NavbarDentComponent } from './navbar-dent/navbar-dent.component';
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
import { FormTemplateComponent } from './form-template/form-template.component';
import { BindObjectParentComponent } from './bind-object-parent/bind-object-parent.component';
import { BindObjectChildComponent } from './bind-object-child/bind-object-child.component';
import { NavbarMatComponent } from './navbar-mat/navbar-mat.component';
import { RandomComponent } from './random/random.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { ScrollComponent } from './scroll/scroll.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "url", component: GetUrlComponent },

  { path: "input", component: InputDesignComponent },
  { path: "ng-for", component: NgForComponent },

  { path: "navbar-dent", component: NavbarDentComponent },
  { path: "navbar-nepal", component: NavbarNepalComponent },
  { path: "navbar-sebastian", component: NavbarSebastianComponent },
  { path: "navbar-mat", component: NavbarMatComponent },

  { path: "click-outside", component: ClickOutsideComponent },

  { path: "radio-buttons", component: RadioButtonsComponent },

  { path: "wrap-cells", component: TableWrapCellsComponent },

  { path: "model", component: NgModelComponent },
  { path: "group", component: FormGroupComponent },
  { path: "building", component: FormBuildingComponent },
  { path: "form-template", component: FormTemplateComponent },

  { path: "parent1", component: BindParent1Component },
  { path: "parent2", component: BindParent2Component },
  { path: "child1", component: BindChild1Component },
  { path: "child2", component: BindChild2Component },

  { path: "object-parent", component: BindObjectParentComponent },
  { path: "object-child", component: BindObjectChildComponent },

  { path: "double", component: DoubleComponent },

  { path: "pause", component: CarouselPauseComponent },
  { path: "anim", component: CarouselAnimComponent },

  { path: "breakpoints", component: LayoutBreakpointComponent },

  { path: "layout", component: LayoutFlexComponent },

  { path: "tab", component: TabComponent },

  { path: "mega-menu", component: MegaMenuComponent },
  { path: "mega-menu-drop", component: MegaMenuDropComponent },
  { path: "mega-menu-hover", component: MegaMenuHoverComponent },
  { path: "mega-menu-click", component: MegaMenuClickComponent },

  { path: "table-mat-sorter", component: TableMatSorterComponent },

  { path: "random", component: RandomComponent },

  { path: "image-zoom", component: ImageZoomComponent },

  { path: "scroll", component: ScrollComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
