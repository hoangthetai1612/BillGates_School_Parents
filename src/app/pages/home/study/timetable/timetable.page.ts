import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Step } from 'ionic2-calendar/calendar';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';
import startOfWeek from 'date-fns/startOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

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

  startWeek: Date;
  endWeek: Date;
  currentDate = new Date();
  listDate = [];
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.startWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    this.endWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 5
    );
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
  }
  nextWeek() {
    this.startWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 7
    );
    this.endWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 5
    );
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
  }
  preWeek() {
    this.startWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() - 7
    );
    this.endWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 5
    );
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
    console.log(this.listDate);
  }
  async openNoteLesson() {
    const modal = await this.modalController.create({
      component: NoteLessonComponent,
      cssClass: 'note-lesson-wrap',
    });
    return await modal.present();
  }
}
