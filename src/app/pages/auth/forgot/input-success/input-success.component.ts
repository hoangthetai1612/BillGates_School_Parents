import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';

@Component({
  selector: 'app-input-success',
  templateUrl: './input-success.component.html',
  styleUrls: ['./input-success.component.scss'],
})
export class InputSuccessComponent implements OnInit {
  buttonStyle = {
    width: "97px",
    cssClass: "buttonDarkOrange",
    text: "Xác nhận",
  }
  constructor(private modalController: ModalController) { }

  ngOnInit() { }
  async closeModal(data?) {
    await this.modalController.dismiss(data);
  }
}
@NgModule({
  declarations: [InputSuccessComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseButtonModule
  ],
  exports: [InputSuccessComponent]
})
export class InputSuccessModule {

}
