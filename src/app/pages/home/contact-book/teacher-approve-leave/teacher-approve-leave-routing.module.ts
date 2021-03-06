import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherApproveLeavePage } from './teacher-approve-leave.page';
import { LeaveDetailComponent } from './leave-detail/leave-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherApproveLeavePage
  },
  {
    path: ':studentId',
    component: LeaveDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherApproveLeavePageRoutingModule { }
