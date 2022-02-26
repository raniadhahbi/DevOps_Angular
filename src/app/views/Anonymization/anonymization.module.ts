import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular';

import { CoreUIIconsComponent } from './coreui-icons.component';


import { AnonymizationRoutingModule } from './anonymization-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnonymizationRoutingModule,
    IconModule
  ],
  declarations: [
    CoreUIIconsComponent]
})
export class IconsModule { }
