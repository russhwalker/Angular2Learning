import { Component } from '@angular/core';

export class Customer {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
template:`
  <h1>{{title}}</h1>
  <h2>{{customer.name}} details!</h2>
  <div><label>id: </label>{{customer.id}}</div>
  <div>
    <label>name: </label>
    <input value="{{customer.name}}" placeholder="name">
  </div>
  `
})

export class AppComponent {
  title = 'My Store Customers';
  customer : Customer = {
    id:1,
    name: 'John'
  };
}

