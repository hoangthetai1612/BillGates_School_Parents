import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-result',
  templateUrl: './detail-result.component.html',
  styleUrls: ['./detail-result.component.scss'],
})
export class DetailResultComponent implements OnInit {
  @Input() name;
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconRight: '',
    iconCenter: {
      text: 'Kết quả học tập',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      image: 'image',
      isText: false
      // couple: 'couple',
      // backbutton: 'backbutton'
    }

  };

  listPoint = [
    {
      point: 8,
      per: 10,
      title: 'Điểm miệng 1_Hệ số 1'
    },
    {
      point: 8,
      per: 10,
      title: 'Điểm miệng 1_Hệ số 1'
    },
    {
      point: 9,
      per: 10,
      title: 'Điểm miệng 1_Hệ số 1'
    }
  ];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.name);
  }
  closeModal(){
    this.modalController.dismiss({
      // dismissed: true
    });
  }
}
