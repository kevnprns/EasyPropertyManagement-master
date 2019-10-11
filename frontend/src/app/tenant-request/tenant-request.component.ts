import { Component, Input, OnInit } from '@angular/core';
import { Property, Unit, TenantRequest, PropertyService } from '../api/client/properties/property.service';

@Component({
  selector: 'app-tenant-request',
  templateUrl: './tenant-request.component.html',
  styleUrls: ['./tenant-request.component.css']
})
export class TenantRequestComponent implements OnInit {
  @Input() properties: Property [];
  unitInput: string;
  nameInput: string;
  phoneInput: string;
  emailInput: string;
  messageInput: string;

  selectedProperty: Property = null;
  successMessage: string = null
  errorMessage: string = null;
  unitError: boolean = false;
  propertyError: boolean = false;

  newTenantRequest: TenantRequest;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  submitForm(): void {
    this.propertyError =  null;
    this.unitError =  null;
    this.errorMessage = null;
    this.successMessage = null;

    if(this.selectedProperty == null){
      this.errorMessage = "Must selected a property";
      this.propertyError = true;
    }
    // check that the unit is within the property
    let selectedUnit: Unit = this.getUnit()
    if(!selectedUnit) {
      this.errorMessage = 'Unit #' + this.unitInput + ' cannot be found within the selected property';
      this.unitError = true;
    }

    if(!this.errorMessage){
      this.sendTenantRequest(selectedUnit);
    }
  }

  getUnit(): Unit{
    let unitIndex: number = this.selectedProperty.units.findIndex(unit => unit.number === this.unitInput);

    if(unitIndex >= 0) return this.selectedProperty.units[unitIndex];
    else return null;
  }

  prepareNewRequest(): TenantRequest {
    let newTenantRequest: TenantRequest = {
      "name": this.nameInput,
      "phone": this.phoneInput,
      "email": this.emailInput,
      "message": this.messageInput,
      "created": new Date(),
      "processed": false
    };

    return newTenantRequest;
  }

  sendTenantRequest(selectedUnit: Unit){
    // If there is no requests start a new list, otherwise push a request.
    if(selectedUnit.tenant_requests == undefined) selectedUnit.tenant_requests = [this.prepareNewRequest()];
    else selectedUnit.tenant_requests.push(this.prepareNewRequest());

    this.propertyService.updateProperty(this.selectedProperty).subscribe(propertyId => {
      console.log("Successfully Update Property: ");
      console.log(propertyId);

      this.successMessage = "Tenant request successfully sent.";
      this.clearFields();
    });;
  }

  clearFields() {
    this.unitInput = '';
    this.nameInput = '';
    this.phoneInput = '';
    this.emailInput = '';
    this.messageInput = '';

    this.selectedProperty = null;
    this.errorMessage = null;
    this.unitError = false;
    this.propertyError = false;
    this.newTenantRequest = null;
  }
}
