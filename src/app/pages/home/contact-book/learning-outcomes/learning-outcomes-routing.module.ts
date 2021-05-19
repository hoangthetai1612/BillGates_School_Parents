import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';

import { LearningOutcomesPage } from './learning-outcomes.page';

const routes: Routes = [
  {
    path: '',
    component: LearningOutcomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RoleDirectiveModule],
})
export class LearningOutcomesPageRoutingModule {}
