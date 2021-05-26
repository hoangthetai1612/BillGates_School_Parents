import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';
import startOfWeek from 'date-fns/startOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import getDay from 'date-fns/getDay';
import { TeacherNoteLessonComponent } from './teacher-note-lesson/teacher-note-lesson.component';
import { TimeTableService } from 'src/app/service/timetable.service';
import { DatePipe } from '@angular/common';
import { TimeTableLesson } from 'src/app/models/timetable.model';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Thời khóa biểu',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton',
    },
  };
  listTimeTable$!: Observable<TimeTableLesson[]>;
  subject = new Subject();
  checkActive: number;
  startWeek: Date;
  endWeek: Date;
  currentDate = new Date();
  listDate = [];
  classId: number;
  valueToday: number;
  constructor(
    private modalController: ModalController,
    private timetableService: TimeTableService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.startWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    this.setEndWeek(this.startWeek, 5);
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
    this.valueToday = getDay(this.currentDate);
    const fromDate = this.datePipe.transform(this.startWeek, 'yyyy-MM-dd');
    const toDate = this.datePipe.transform(this.endWeek, 'yyyy-MM-dd');
    this.listTimeTable$ = this.subject.asObservable().pipe(
      startWith(this.valueToday),
      switchMap((valueDay) => {
        return this.timetableService.getTimeTable(
          valueDay,
          25,
          fromDate,
          toDate
        );
      })
    );
  }
  setStartWeek(dateFrom: Date, number: number) {
    this.startWeek = new Date(
      dateFrom.getFullYear(),
      dateFrom.getMonth(),
      dateFrom.getDate() + number
    );
  }
  setEndWeek(dateFrom: Date, number: number) {
    this.endWeek = new Date(
      dateFrom.getFullYear(),
      dateFrom.getMonth(),
      dateFrom.getDate() + number
    );
  }
  nextWeek() {
    this.setStartWeek(this.startWeek, 7);
    this.setEndWeek(this.endWeek, 7);
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
    this.checkActive = -1;
  }
  preWeek() {
    this.setStartWeek(this.startWeek, -7);
    this.setEndWeek(this.endWeek, -7);
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
    this.checkActive = -1;
  }
  listTimeTableByService(valueDay: any) {
    this.subject.next(valueDay);
  }
  async openNoteLesson(id, note) {
    const role = localStorage.getItem('role');
    if (role === 'parents') {
      const modal = await this.modalController.create({
        component: NoteLessonComponent,
        cssClass: 'note-lesson-wrap',
        componentProps: {
          id: id,
          note: note
        }
      });
      return await modal.present();
    } else {
      const modal = await this.modalController.create({
        component: TeacherNoteLessonComponent,
        cssClass: 'note-lesson-wrap',
        componentProps: {
          id: id,
          note: note
        }
      });
      return await modal.present();
    }
  }
}
