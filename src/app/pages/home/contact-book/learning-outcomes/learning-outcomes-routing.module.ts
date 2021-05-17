import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningOutcomesPage } from './learning-outcomes.page';

const routes: Routes = [
  {
    path: '',
    component: LearningOutcomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningOutcomesPageRoutingModule {}
