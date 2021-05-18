import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'contact-book',
    loadChildren: () => import('./contact-book/contact-book.module').then(m => m.ContactBookPageModule)
  },
  {
    path: 'study',
    loadChildren: () => import('./study/study.module').then(m => m.StudyPageModule)
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
