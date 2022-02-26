import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NewPermissionComponent } from './newPermission.component';
import { NewPermissionRoutingModule } from './newPermission-routing.module';

@NgModule({
  imports: [
    NewPermissionRoutingModule,
    ChartsModule
  ],
  declarations: [NewPermissionComponent ]
})
export class NewPermissionModule { }