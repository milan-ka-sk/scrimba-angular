import { NgModule }      from '@angular/core';
// we dont need BrowserModule but CommonModule
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent ]
  // we dont need bootstrap
  ,
  exports: [ CustomersComponent ]
})
export class CustomersModule { }