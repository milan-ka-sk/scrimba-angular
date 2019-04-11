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

  @Input() customers: ICustomer[];
  // @Input('data') customers: ICustomer[]; // alternative with alias
  
  constructor() { }

  ngOnInit() {
    // temporary setting up data
    this.filteredCustomers = this.customers;
    this.calculateOrders();
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {
    // A sorter service will handle the sorting

    console.log(prop);
  }

}
