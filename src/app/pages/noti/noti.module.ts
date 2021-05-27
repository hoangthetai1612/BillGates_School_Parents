import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotiPageRoutingModule } from './noti-routing.module';

import { NotiPage } from './noti.page';
import { HeaderModule } from 'src/app/base/header/header.component';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotiPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  declarations: [NotiPage],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'vi-VN' }]
})
export class NotiPageModule { }
