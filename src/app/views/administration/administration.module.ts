// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AreasComponent } from './area.component';

// Forms Component
import { CurrenciesComponent } from './currencies.component';

import { PresalesEngineersComponent } from './presales_Engineers.component';
import { ProductsLinesComponent } from './products_Lines.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UsersComponent } from './users.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BusinessLineComponent } from './business_Line.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BusinessUnitsComponent } from './business_Units.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { GeographyComponent } from './geography.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DepartementsComponent } from './departements.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PermissionsComponent } from './permissions.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


// navbars
import { CustomersComponent } from './Customers/customers.component';

// Components Routing
import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    AreasComponent,
    CurrenciesComponent,
    PresalesEngineersComponent,
    ProductsLinesComponent,
    UsersComponent,
    BusinessLineComponent,
    BusinessUnitsComponent,
    DepartementsComponent,
    GeographyComponent,
    PermissionsComponent,
    CustomersComponent
  ]
})
export class AdministrationModule { }
