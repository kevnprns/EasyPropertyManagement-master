import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { TenantRequestComponent } from './tenant-request/tenant-request.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyListComponent,
    TenantRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApiClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
