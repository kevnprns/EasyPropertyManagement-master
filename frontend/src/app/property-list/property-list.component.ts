import { Component, Input, OnInit } from '@angular/core';

import { Property } from '../api/client/properties/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  @Input() properties: Property [];
  selectedProperty: Property;

  constructor() {}

  ngOnInit() {
  }

  selectProperty(property: Property) { this.selectedProperty = null; this.selectedProperty = property; };

  unselectProperty(){ this.selectedProperty = null; }

}
