import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ReportingComponent } from './reporting.component';
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  imports: [
    ReportingRoutingModule,
    ChartsModule
  ],
  declarations: [ ReportingComponent ]
})
export class ChartJSModule { }