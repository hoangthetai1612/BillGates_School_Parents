import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailNotificationComponent } from './detail-notification/detail-notification.component';

import { NotiPage } from './noti.page';

const routes: Routes = [
  {
    path: '',
    component: NotiPage
  }
  ,
  {
    path: 'detail/:id',
    component: DetailNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotiPageRoutingModule { }
