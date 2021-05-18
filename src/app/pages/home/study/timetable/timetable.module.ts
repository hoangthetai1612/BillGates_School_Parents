import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimetablePageRoutingModule } from './timetable-routing.module';

import { TimetablePage } from './timetable.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { HeaderModule } from 'src/app/base/header/header.component';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';
import localeVi from "@angular/common/locales/vi";
registerLocaleData(localeVi);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimetablePageRoutingModule,
    NgCalendarModule,
    HeaderModule
  ],
  declarations: [TimetablePage, NoteLessonComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'vi-VN' }],
  entryComponents: [TimetablePage],
})
export class TimetablePageModule {}
