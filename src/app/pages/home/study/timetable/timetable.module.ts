import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimetablePageRoutingModule } from './timetable-routing.module';

import { TimetablePage } from './timetable.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { HeaderModule } from 'src/app/base/header/header.component';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';

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
  entryComponents: [TimetablePage],
})
export class TimetablePageModule {}
