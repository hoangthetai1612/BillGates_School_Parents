import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherApproveLeavePageRoutingModule } from './teacher-approve-leave-routing.module';

import { TeacherApproveLeavePage } from './teacher-approve-leave.page';
import { CardApproveLeaveModule } from 'src/app/base/card-approve-leave/card-approve-leave.component';
import { HeaderModule } from 'src/app/base/header/header.component';
import { LeaveDetailComponent } from './leave-detail/leave-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherApproveLeavePageRoutingModule,
    CardApproveLeaveModule,
    HeaderModule
  ],
  declarations: [TeacherApproveLeavePage, LeaveDetailComponent]
})
export class TeacherApproveLeavePageModule { }
