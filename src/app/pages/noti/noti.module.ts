import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiPageRoutingModule } from './noti-routing.module';

import { NotiPage } from './noti.page';
import { HeaderModule } from 'src/app/base/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiPageRoutingModule,
    HeaderModule
  ],
  declarations: [NotiPage]
})
export class NotiPageModule { }
