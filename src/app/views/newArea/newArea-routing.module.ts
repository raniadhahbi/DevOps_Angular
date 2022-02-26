import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAreaComponent } from './newArea.component';

const routes: Routes = [
  {
    path: '',
    component: NewAreaComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAreaRoutingModule {}
