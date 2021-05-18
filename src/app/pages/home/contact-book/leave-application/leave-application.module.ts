import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveApplicationPageRoutingModule } from './leave-application-routing.module';

import { LeaveApplicationPage } from './leave-application.page';
import { BaseLeaveCardModule } from 'src/app/base/base-leave-card/base-leave-card.component';
import { HeaderModule } from 'src/app/base/header/header.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveApplicationPageRoutingModule,
    BaseLeaveCardModule,
    HeaderModule
  ],
  declarations: [LeaveApplicationPage, CreateLeaveComponent]
})
export class LeaveApplicationPageModule {}
