import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherApproveLeavePage } from './teacher-approve-leave.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherApproveLeavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherApproveLeavePageRoutingModule {}
