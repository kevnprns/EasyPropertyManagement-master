import { Component, Input, OnInit } from '@angular/core';

import { Property, Unit } from '../api/client/properties/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @Input() property: Property;
  selectedUnit: Unit;

  constructor() {  }

  ngOnInit() {
    this.selectedUnit = null;
  }

  selectUnit(unit: Unit) {
    this.selectedUnit = unit;
  }

  closeRequests(){
    this.selectedUnit = null;
  }

}
