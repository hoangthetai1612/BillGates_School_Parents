import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Step } from 'ionic2-calendar/calendar';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';
import startOfWeek from 'date-fns/startOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { TeacherNoteLessonComponent } from './teacher-note-lesson/teacher-note-lesson.component';

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
  list = [0, 1, 2, 3, 4];
  checkActive: number;
  startWeek: Date;
  endWeek: Date;
  currentDate = new Date();
  listDate = [];
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.startWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    this.setEndWeek(this.startWeek, 5);
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
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
  }
  preWeek() {
    this.setStartWeek(this.startWeek, -7);
    this.setEndWeek(this.endWeek, -7);
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
  }
  async openNoteLesson() {
    const role = localStorage.getItem('role');
    if (role === 'parents') {
      const modal = await this.modalController.create({
        component: NoteLessonComponent,
        cssClass: 'note-lesson-wrap',
      });
      return await modal.present();
    } else {
      const modal = await this.modalController.create({
        component: TeacherNoteLessonComponent,
        cssClass: 'note-lesson-wrap',
      });
      return await modal.present();
    }
  }
}
