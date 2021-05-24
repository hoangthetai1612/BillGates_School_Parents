import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimetablePageRoutingModule } from './timetable-routing.module';

import { TimetablePage } from './timetable.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { HeaderModule } from 'src/app/base/header/header.component';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';
import localeVi from '@angular/common/locales/vi';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';
import { TeacherNoteLessonComponent } from './teacher-note-lesson/teacher-note-lesson.component';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
registerLocaleData(localeVi);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimetablePageRoutingModule,
    NgCalendarModule,
    HeaderModule,
    RoleDirectiveModule,
    BaseButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TimetablePage,
    NoteLessonComponent,
    TeacherNoteLessonComponent,
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'vi-VN' }],
  entryComponents: [TimetablePage],
})
export class TimetablePageModule {}
