import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  header = {
    cssClass: 'header-basic',
    classText: 'text-black',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: 'assets/svg/icon-avt-home.svg',
    iconCenter: {
      // text: 'Thông báo',
      image: 'assets/svg/icon-logo.svg'
    },
    typecenter: {
      // text: 'text',
      image: 'image',
      // couple: 'couple'
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule
  ],
  exports: [HomePage]
})
export class HomeModule {

}