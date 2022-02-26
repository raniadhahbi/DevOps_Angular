import { NgModule } from '@angular/core';


import { NewGeographyComponent } from './newGeography.component';
import { NewGeographyRoutingModule } from './newGeography-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NewGeographyRoutingModule,
    FormsModule
  ],
  declarations: [NewGeographyComponent ]
})
export class NewGeographyModule { }