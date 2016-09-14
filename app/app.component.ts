import { Component } from '@angular/core';
import { Customer } from './customer';


@Component({
  selector: 'my-app',
template:`
  <h1>{{title}}</h1>

  <h2>My Customers</h2>
  <ul class="customers">
    <li *ngFor="let customer of customers" 
    [class.selected]="customer === selectedCustomer"
    (click)="onSelect(customer)">
      <span class="badge">{{customer.id}}</span> {{customer.name}}
    </li>
  </ul>
  <my-customer-detail [customer]="selectedCustomer"></my-customer-detail>

  `,styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .customers {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .customers li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .customers li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .customers li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .customers .text {
    position: relative;
    top: -3px;
  }
  .customers .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {
  title = 'My Store Customers';
  selectedCustomer: Customer;
  customers = Customers;
    onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  };
}

const Customers : Customer[] = [
  {id: 11, name : 'Andy'},
  {id: 12, name : 'Bob'},
  {id: 13, name : 'Charles'},
  {id: 14, name : 'Dan'},
  {id: 15, name : 'Jane'},
  {id: 16, name : 'John'},
  {id: 17, name : 'Cindy'},
  {id: 18, name : 'Steven'},
  {id: 19, name : 'Robert'}
];