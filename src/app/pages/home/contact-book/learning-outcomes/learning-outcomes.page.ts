import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { DetailResultComponent } from './detail-result/detail-result.component';

@Component({
  selector: 'app-learning-outcomes',
  templateUrl: './learning-outcomes.page.html',
  styleUrls: ['./learning-outcomes.page.scss'],
})
export class LearningOutcomesPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;
  @Input() data;

  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Kết quả học tập',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton'
    }

  };
  // defaultHref = 'main/home/contact-book';
  listSubject=[{name: 'Toán 10'},{name: 'Ngữ Văn 10'},{name: 'Toán 10'},{name: 'Ngữ Văn 10'},{name: 'Toán 10'},{name: 'Ngữ Văn 10'}];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openDetail(item) {
    const modal = await this.modalController.create({
      component: DetailResultComponent,
      componentProps: {name: item.name}
    });
    return await modal.present();
  }

  prev(){
    this.slides.slidePrev();
  }
  next(){
    this.slides.slideNext();
  }
}
