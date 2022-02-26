import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NewDepartementComponent } from './newDepartement.component';
import { NewDepartementRoutingModule } from './newDepartement-routing.module';

@NgModule({
  imports: [
    NewDepartementRoutingModule,
    ChartsModule
  ],
  declarations: [NewDepartementComponent ]
})
export class NewDepartementModule { }