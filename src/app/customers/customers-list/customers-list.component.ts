import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number = 5;
  currencyCode: string = 'USD';

  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
      return this._customers;
  }
  
  set customers(value: ICustomer[]) {
      if (value) {
          this.filteredCustomers = this._customers = value;
          this.calculateOrders();
      }
  }
  
  constructor() { }

  ngOnInit() {

  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
  }

  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
    } else {
        this.filteredCustomers = this.customers;
    }

    this.calculateOrders();
  }

  sort(prop: string) {
    // A sorter service will handle the sorting

    console.log(prop);
  }

}
