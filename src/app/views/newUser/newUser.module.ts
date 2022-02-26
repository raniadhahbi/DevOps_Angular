import { NgModule } from '@angular/core';

import { NewUserComponent } from './newUser.component';
import { NewUserRoutingModule } from './newUser-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NewUserRoutingModule,
    FormsModule
  ],
  declarations: [NewUserComponent ]
})
export class NewUserModule { }