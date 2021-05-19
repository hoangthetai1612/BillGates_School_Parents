import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-learning-outcomes',
  templateUrl: './teacher-learning-outcomes.page.html',
  styleUrls: ['./teacher-learning-outcomes.page.scss'],
})
export class TeacherLearningOutcomesPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconRight: '',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconCenter: {
      text: 'Kết quả học tập',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }
  };

  data = [];

  defaultHref = 'main/home/contact-book';

  constructor() { }

  ngOnInit() {
    this.data.length = 10;
  }

}
