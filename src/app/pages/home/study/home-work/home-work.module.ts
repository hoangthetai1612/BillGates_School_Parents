import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeWorkPageRoutingModule } from './home-work-routing.module';

import { HomeWorkPage } from './home-work.page';
import { HeaderModule } from 'src/app/base/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeWorkPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [HomeWorkPage]
})
export class HomeWorkPageModule {}
