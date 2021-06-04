import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailHomeWorkComponent } from './detail-home-work/detail-home-work.component';

import { HomeWorkPage } from './home-work.page';

const routes: Routes = [
  {
    path: '',
    component: HomeWorkPage
  },
  {
    path: 'detail/:id',
    component: DetailHomeWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeWorkPageRoutingModule { }
