import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from  './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CustomersModule, OrdersModule, SharedModule, CoreModule, AppRoutingModule // the order is important
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
