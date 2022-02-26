import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDepartementComponent } from './newDepartement.component';

const routes: Routes = [
  {
    path: '',
    component: NewDepartementComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDepartementRoutingModule {}
