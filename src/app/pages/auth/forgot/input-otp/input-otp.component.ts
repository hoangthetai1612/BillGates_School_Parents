import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, IonNav } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { InputConfirmComponent } from '../input-confirm/input-confirm.component';

@Component({
  selector: 'app-input-otp',
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.scss'],
})
export class InputOtpComponent implements OnInit {
  buttonStyle = {
    width: "311px",
    cssClass: "buttonDarkOrange",
    text: "Xác nhận",
  }
  constructor(private nav: IonNav) { }

  ngOnInit() {

  }

  backToStep() {
    this.nav.pop()
  }
  openConfirm() {
    this.nav.push(InputConfirmComponent, {

    })
  }
}
@NgModule({
  declarations: [InputOtpComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseButtonModule
  ],
  exports: [InputOtpComponent]
})
export class InputOtpModule {

}
