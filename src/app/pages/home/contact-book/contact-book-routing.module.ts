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
        redirectLink: '/main/home/contact-book/leave-application-teacher',
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
        redirectLink: '/main/home/contact-book/list-result',
      },
    },
    canLoad: [RoleGuard],
    loadChildren: () => import('./learning-outcomes/learning-outcomes.module').then( m => m.LearningOutcomesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactBookPageRoutingModule {}
