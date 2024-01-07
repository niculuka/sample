import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuildingComponent } from './form-building/form-building.component';
import { NavbarMaterialComponent } from './navbar-material/navbar-material.component';
import { NavbarSebastianComponent } from './navbar-sebastian/navbar-sebastian.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { TableWrapCellsComponent } from './table-wrap-cells/table-wrap-cells.component';
import { BindChild1Component } from './bind-child1/bind-child1.component';
import { BindChild2Component } from './bind-child2/bind-child2.component';
import { BindParent1Component } from './bind-parent1/bind-parent1.component';
import { BindParent2Component } from './bind-parent2/bind-parent2.component';
import { DoubleComponent } from './double/double.component';
import { NavbarMaterial2Component } from './navbar-material2/navbar-material2.component';
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

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "url", component: GetUrlComponent },

  { path: "input", component: InputDesignComponent },
  { path: "ng-for", component: NgForComponent },

  { path: "dent", component: NavbarDentComponent },
  { path: "nepal", component: NavbarNepalComponent },
  { path: "sebastian", component: NavbarSebastianComponent },
  { path: "material", component: NavbarMaterialComponent },
  { path: "material2", component: NavbarMaterial2Component },
  { path: "click-outside", component: ClickOutsideComponent },

  { path: "radio-buttons", component: RadioButtonsComponent },

  { path: "wrap-cells", component: TableWrapCellsComponent },

  { path: "model", component: NgModelComponent },
  { path: "group", component: FormGroupComponent },
  { path: "building", component: FormBuildingComponent },

  { path: "parent1", component: BindParent1Component },
  { path: "parent2", component: BindParent2Component },
  { path: "child1", component: BindChild1Component },
  { path: "child2", component: BindChild2Component },

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
