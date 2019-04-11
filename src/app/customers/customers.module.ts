import { NgModule }      from '@angular/core';
// we dont need BrowserModule but CommonModule
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent, CustomersListComponent ]
  // we dont need bootstrap
  ,
  exports: [ CustomersComponent ]
})
export class CustomersModule { }