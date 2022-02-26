import { NgModule } from '@angular/core';


import { NewBusinessUnitComponent } from './newBusinessUnit.component';
import { NewBusinessUnitRoutingModule } from './newBusinessUnit-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NewBusinessUnitRoutingModule,
    FormsModule
  ],
  declarations: [NewBusinessUnitComponent ]
})
export class NewBusinessUnitModule { }