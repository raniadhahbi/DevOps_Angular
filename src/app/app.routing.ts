import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [

    {
      path:'',
      redirectTo: '/login',
      pathMatch: 'full',
    },
  {
    path: '',
   component:DashboardComponent
   
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'administration',
        loadChildren: () => import('./views/administration/administration.module').then(m => m.AdministrationModule )
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/Opportunity_Management/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'reporting',
        loadChildren: () => import('./views/Reporting/reporting.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'anonymization',
        loadChildren: () => import('./views/Anonymization/anonymization.module').then(m => m.IconsModule)
      },
      {
        path: 'order_Book',
        loadChildren: () => import('./views/Order_Book/order_Book.module').then(m => m.OrderBookModule)
      }
      ,
      {
        path: 'newArea',
        loadChildren: () => import('./views/newArea/newArea.module').then(m => m.NewAreaModule)
      }
      ,
      {
        path: 'newBusinessLine',
        loadChildren: () => import('./views/newBusinessLine/newBusinessLine.module').then(m => m.NewBusinessLineModule)
      }
      ,
      {
        path: 'newBusinessUnit',
        loadChildren: () => import('./views/newBusinessUnit/newBusinessUnit.module').then(m => m.NewBusinessUnitModule)
      }
      ,
      {
        path: 'newCurrency',
        loadChildren: () => import('./views/newCurrency/newCurrency.module').then(m => m.NewCurrencyModule)
      }
      ,
      {
        path: 'newCustomer',
        loadChildren: () => import('./views/newCustomer/newCustomer.module').then(m => m.NewCustomerModule)
      }
      ,
      {
        path: 'newGeography',
        loadChildren: () => import('./views/newGeography/newGeography.module').then(m => m.NewGeographyModule)
      },
      {
        path: 'newPermission',
        loadChildren: () => import('./views/newPermission/newPermission.module').then(m => m.NewPermissionModule)
      }
      ,
      {
        path: 'newPreSale',
        loadChildren: () => import('./views/newPreSale/newPreSale.module').then(m => m.NewPreSaleModule)
      }
      ,
      {
        path: 'newProductLine',
        loadChildren: () => import('./views/newProductLine/newProductLine.module').then(m => m.NewProductLineModule)
      },
      {
        path: 'newUser',
        loadChildren: () => import('./views/newUser/newUser.module').then(m => m.NewUserModule)
      }
      ,
      {
        path: 'newDepartement',
        loadChildren: () => import('./views/newDepartement/newDepartement.module').then(m => m.NewDepartementModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
