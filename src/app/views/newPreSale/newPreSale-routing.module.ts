import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPreSaleComponent } from './newPreSale.component';

const routes: Routes = [
  {
    path: '',
    component: NewPreSaleComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPreSaleRoutingModule {}
