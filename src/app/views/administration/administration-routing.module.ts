import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from './area.component';
import { CurrenciesComponent } from './currencies.component';
import { PresalesEngineersComponent } from './presales_Engineers.component';
import { ProductsLinesComponent } from './products_Lines.component';
import { UsersComponent } from './users.component';
import { BusinessLineComponent } from './business_Line.component';
import { BusinessUnitsComponent } from './business_Units.component';
import { DepartementsComponent } from './departements.component';
import { GeographyComponent } from './geography.component';
import { PermissionsComponent } from './permissions.component';
import { CustomersComponent } from './Customers/customers.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administration'
    },
    children: [
      {
        path: '',
        redirectTo: 'area'
      },
      {
        path: 'area',
        component: AreasComponent,
        data: {
          title: 'Area'
        }
      },
      {
        path: 'currencies',
        component: CurrenciesComponent,
        data: {
          title: 'Currencies'
        }
      },
      {
        path: 'presales_Engineers',
        component: PresalesEngineersComponent,
        data: {
          title: 'Presales Engineers'
        }
      },
      {
        path: 'products_Lines',
        component: ProductsLinesComponent,
        data: {
          title: 'Products Lines'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'Business_Lines',
        component: BusinessLineComponent,
        data: {
          title: 'Business Lines'
        }
      },
      {
        path: 'Business_Units',
        component: BusinessUnitsComponent,
        data: {
          title: 'Business Units'
        }
      },
      {
        path: 'departements',
        component: DepartementsComponent,
        data: {
          title: 'Departements'
        }
      },
      {
        path: 'geography',
        component: GeographyComponent,
        data: {
          title: 'Geography'
        }
      },
      {
        path: 'permissions',
        component: PermissionsComponent,
        data: {
          title: 'Permissions'
        }
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: {
          title: 'Customers'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
