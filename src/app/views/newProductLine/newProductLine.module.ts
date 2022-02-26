import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NewProductLineComponent } from './newProductLine.component';
import { NewProductLineRoutingModule } from './newProductLine-routing.module';

@NgModule({
  imports: [
    NewProductLineRoutingModule,
    ChartsModule
  ],
  declarations: [NewProductLineComponent ]
})
export class NewProductLineModule { }