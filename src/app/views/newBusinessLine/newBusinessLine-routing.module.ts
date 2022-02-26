import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBusinessLineComponent } from './newBusinessLine.component';

const routes: Routes = [
  {
    path: '',
    component: NewBusinessLineComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBusinessLineRoutingModule {}
