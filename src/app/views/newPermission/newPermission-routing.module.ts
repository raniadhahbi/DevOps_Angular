import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPermissionComponent } from './newPermission.component';

const routes: Routes = [
  {
    path: '',
    component: NewPermissionComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPermissionRoutingModule {}
