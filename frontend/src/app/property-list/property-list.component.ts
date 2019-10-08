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
  showProperty: boolean;

  constructor() {
    this.showProperty = false;
    // this.selectedProperty = { _id:"undefined", name:"undefined", address:"undefined", units:[]};
  }

  ngOnInit() {
  }

  selectProperty(property: Property) { this.selectedProperty = property;  console.log(this.selectedProperty); };

  unselectProperty(){ this.selectedProperty = null;  console.log(this.selectedProperty); }

}
