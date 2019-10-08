import { Component, Input, OnInit } from '@angular/core';

import { Property } from '../api/client/properties/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @Input() property: Property;

  constructor() {  }

  ngOnInit() {
    
  }


}
