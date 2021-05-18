import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherLearningOutcomesPage } from './teacher-learning-outcomes.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherLearningOutcomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherLearningOutcomesPageRoutingModule {}
