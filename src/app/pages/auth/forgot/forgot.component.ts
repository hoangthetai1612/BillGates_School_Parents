import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { ModalController, IonNav, Platform, IonicModule } from '@ionic/angular';
import { InputUsernameComponent } from './input-username/input-username.component';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  rootPage: any;
  rootParams;
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
}
@NgModule({
  declarations: [ForgotComponent, InputUsernameComponent],
<<<<<<< HEAD
  imports: [CommonModule, IonicModule, BaseButtonModule],
  exports: [ForgotComponent, InputUsernameComponent],
=======
  imports: [
    CommonModule,
    IonicModule,
    BaseButtonModule,

  ],
  exports: [ForgotComponent, InputUsernameComponent],
  
>>>>>>> a12213c5e75caf8bb66d8819e2b7624a13b9364d
})
export class ForgotModule {}
