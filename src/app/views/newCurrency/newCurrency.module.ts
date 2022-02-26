import { NgModule } from '@angular/core';


import { NewCurrencyComponent } from './newCurrency.component';
import { NewCurrencyRoutingModule } from './newCurrency-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NewCurrencyRoutingModule,
    FormsModule
  ],
  declarations: [NewCurrencyComponent ]
})
export class NewCurrencyModule { }