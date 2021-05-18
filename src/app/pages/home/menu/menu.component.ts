import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Thực đơn',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }

  };
  constructor() { }

  ngOnInit() { }

}
@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {

}
