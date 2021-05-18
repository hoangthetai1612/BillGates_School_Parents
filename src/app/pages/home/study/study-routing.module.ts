import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyPage } from './study.page';

const routes: Routes = [
  {
    path: '',
    component: StudyPage
  },
  {
    path: 'home-work',
    loadChildren: () => import('./home-work/home-work.module').then( m => m.HomeWorkPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyPageRoutingModule {}
