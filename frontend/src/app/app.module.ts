import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './property-list/property-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
