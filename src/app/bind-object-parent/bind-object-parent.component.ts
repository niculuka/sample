import { Component } from '@angular/core';
import { DRIVERS } from 'src/data/drivers.data';

@Component({
  selector: 'app-bind-object-parent',
  templateUrl: './bind-object-parent.component.html',
  styleUrls: ['./bind-object-parent.component.css']
})
export class BindObjectParentComponent  {

  drivers = DRIVERS;

}
