import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';
import { InputOtpComponent } from '../input-otp/input-otp.component';

@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.scss'],
})
export class InputUsernameComponent implements OnInit {
  buttonStyle = {
    width: '311px',
    cssClass: 'buttonDarkOrange',
    text: 'Gửi mã xác nhận',
  };
  constructor(private modalController: ModalController, private nav: IonNav) {}

  ngOnInit() {}

  openInputOtp() {
    this.nav.push(InputOtpComponent, {});
  }
  async closeModal(data?) {
    await this.modalController.dismiss(data);
  }
}
