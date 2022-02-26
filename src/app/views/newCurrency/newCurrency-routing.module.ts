import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCurrencyComponent } from './newCurrency.component';

const routes: Routes = [
  {
    path: '',
    component: NewCurrencyComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCurrencyRoutingModule {}
