import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherApproveLeavePageRoutingModule } from './teacher-approve-leave-routing.module';

import { TeacherApproveLeavePage } from './teacher-approve-leave.page';
import { CardApproveLeaveModule } from 'src/app/base/card-approve-leave/card-approve-leave.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherApproveLeavePageRoutingModule,
    CardApproveLeaveModule
  ],
  declarations: [TeacherApproveLeavePage]
})
export class TeacherApproveLeavePageModule { }
