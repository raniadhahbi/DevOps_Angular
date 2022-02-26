// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from './alerts.component';

import { BadgesComponent } from './badges.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Notifications Routing
import { OrderBookRoutingModule } from './order_Book-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrderBookRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AlertsComponent,
    BadgesComponent,
    ModalsComponent
  ]
})
export class OrderBookModule { }
