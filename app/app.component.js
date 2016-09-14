"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Store Customers';
        this.customers = Customers;
    }
    AppComponent.prototype.onSelect = function (customer) {
        this.selectedCustomer = customer;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n\n  <h2>My Customers</h2>\n  <ul class=\"customers\">\n    <li *ngFor=\"let customer of customers\" \n    [class.selected]=\"customer === selectedCustomer\"\n    (click)=\"onSelect(customer)\">\n      <span class=\"badge\">{{customer.id}}</span> {{customer.name}}\n    </li>\n  </ul>\n  <my-customer-detail [customer]=\"selectedCustomer\"></my-customer-detail>\n\n  ", styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .customers {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .customers li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .customers li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .customers li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .customers .text {\n    position: relative;\n    top: -3px;\n  }\n  .customers .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Customers = [
    { id: 11, name: 'Andy' },
    { id: 12, name: 'Bob' },
    { id: 13, name: 'Charles' },
    { id: 14, name: 'Dan' },
    { id: 15, name: 'Jane' },
    { id: 16, name: 'John' },
    { id: 17, name: 'Cindy' },
    { id: 18, name: 'Steven' },
    { id: 19, name: 'Robert' }
];
//# sourceMappingURL=app.component.js.map