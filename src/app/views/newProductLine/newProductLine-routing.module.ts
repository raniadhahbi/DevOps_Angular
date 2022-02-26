import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductLineComponent } from './newProductLine.component';

const routes: Routes = [
  {
    path: '',
    component: NewProductLineComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductLineRoutingModule {}
