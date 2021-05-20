import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, IonNav } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { InputSuccessComponent } from '../input-success/input-success.component';

@Component({
  selector: 'app-input-confirm',
  templateUrl: './input-confirm.component.html',
  styleUrls: ['./input-confirm.component.scss'],
})
export class InputConfirmComponent implements OnInit {
  buttonStyle = {
    width: "311px",
    cssClass: "buttonDarkOrange",
    text: "Xác nhận",
  }
  constructor(private nav: IonNav) { }

  ngOnInit() { }
  backToStep() {
    this.nav.pop()
  }
  openConfirm() {
    this.nav.push(InputSuccessComponent, {

    })
  }
}
@NgModule({
  declarations: [InputConfirmComponent],
  imports: [
    CommonModule,
    IonicModule,
    BaseButtonModule
  ],
  exports: [InputConfirmComponent]
})
export class InputConfirmModule {

}
