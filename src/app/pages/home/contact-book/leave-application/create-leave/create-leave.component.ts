import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.scss'],
})
export class CreateLeaveComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconRight: '',
    iconCenter: {
      text: 'Tạo đơn xin nghỉ học',
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
  // defaultHref = 'main/home/contact-book';
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss({
      // dismissed: true
    });
  }

}
