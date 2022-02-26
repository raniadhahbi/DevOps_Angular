import { NgModule } from '@angular/core';


import { NewCustomerComponent } from './newCustomer.component';
import { NewCustomerRoutingModule } from './newCustomer-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NewCustomerRoutingModule,
   FormsModule
  ],
  declarations: [NewCustomerComponent ]
})
export class NewCustomerModule { }