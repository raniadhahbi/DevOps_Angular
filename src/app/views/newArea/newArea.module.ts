import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NewAreaComponent } from './newArea.component';
import { NewAreaRoutingModule } from './newArea-routing.module';

@NgModule({
  imports: [
    NewAreaRoutingModule,
    ChartsModule
  ],
  declarations: [NewAreaComponent ]
})
export class NewAreaModule { }