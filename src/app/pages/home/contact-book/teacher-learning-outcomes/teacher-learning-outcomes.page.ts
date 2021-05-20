import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LearningOutcomesPage } from '../learning-outcomes/learning-outcomes.page';

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

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.data.length = 10;
  }

  async openDetailResult(item) {
    const modal = await this.modalController.create({
      component: LearningOutcomesPage,
      componentProps: { data: item }
    });
    return await modal.present();
  }

}
