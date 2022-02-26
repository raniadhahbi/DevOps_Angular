import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreUIIconsComponent } from './coreui-icons.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anonymization'
    },
    children: [
      {
        path: '',
        redirectTo: 'coreui-icons'
      },
      {
        path: 'coreui-icons',
        component: CoreUIIconsComponent,
        data: {
          title: 'CoreUI Icons'
        }
      
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymizationRoutingModule {}
