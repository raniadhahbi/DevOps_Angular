import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGeographyComponent } from './newGeography.component';

const routes: Routes = [
  {
    path: '',
    component: NewGeographyComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGeographyRoutingModule {}
