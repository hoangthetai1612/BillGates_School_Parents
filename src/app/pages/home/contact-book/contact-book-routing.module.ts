/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from 'src/app/base/util/guards/roles.guard';

import { ContactBookPage } from './contact-book.page';

const routes: Routes = [
  {
    path: '',
    component: ContactBookPage,
    children: []
  },
  {
    path: 'leave-application',
    data: {
      permission: {
        roles: 'parents',
        redirectLink: '/main/home/contact-book/teacher-approve-leave',
      },
    },
    canLoad: [RoleGuard],
    loadChildren: () => import('./leave-application/leave-application.module').then( m => m.LeaveApplicationPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'learning-outcomes',
    data: {
      permission: {
        roles: 'parents',
        redirectLink: '/main/home/contact-book/teacher-learning-outcomes',
      },
    },
    canLoad: [RoleGuard],
    loadChildren: () => import('./learning-outcomes/learning-outcomes.module').then( m => m.LearningOutcomesPageModule)
  },
  {
    path: 'teacher-learning-outcomes',
    loadChildren: () => import('./teacher-learning-outcomes/teacher-learning-outcomes.module').then( m => m.TeacherLearningOutcomesPageModule)
  },
  {
    path: 'teacher-approve-leave',
    loadChildren: () => import('./teacher-approve-leave/teacher-approve-leave.module').then( m => m.TeacherApproveLeavePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactBookPageRoutingModule {}
