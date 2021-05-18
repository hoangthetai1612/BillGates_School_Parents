import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-lesson',
  templateUrl: './note-lesson.component.html',
  styleUrls: ['./note-lesson.component.scss'],
})
export class NoteLessonComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Ghi chú tiết học',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton',
    },
  };
  constructor() {}

  ngOnInit() {}
}
