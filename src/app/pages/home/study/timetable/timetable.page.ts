import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Step } from 'ionic2-calendar/calendar';
import { NoteLessonComponent } from './note-lesson/note-lesson.component';

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
  list=[0,1,2,3,4]
  constructor(private modalController: ModalController) {
    
  }

  ngOnInit() {}
  async openNoteLesson() {
    const modal = await this.modalController.create({
      component: NoteLessonComponent,
      cssClass: 'note-lesson-wrap'
    });
    return await modal.present();
  }
}
