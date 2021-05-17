import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },  {
    path: 'contact-book',
    loadChildren: () => import('./contact-book/contact-book.module').then( m => m.ContactBookPageModule)
  },
  {
    path: 'study',
    loadChildren: () => import('./study/study.module').then( m => m.StudyPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
