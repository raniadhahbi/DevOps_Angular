import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBusinessUnitComponent } from './newBusinessUnit.component';

const routes: Routes = [
  {
    path: '',
    component: NewBusinessUnitComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBusinessUnitRoutingModule {}
