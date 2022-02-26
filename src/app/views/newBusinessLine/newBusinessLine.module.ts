import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { NewBusinessLineComponent } from './newBusinessLine.component';
import { NewBusinessLineRoutingModule } from './newBusinessLine-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    NewBusinessLineRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  declarations: [NewBusinessLineComponent ]
})
export class NewBusinessLineModule { }