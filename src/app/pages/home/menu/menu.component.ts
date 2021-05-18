import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import startOfWeek from 'date-fns/startOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import localeVi from "@angular/common/locales/vi";
registerLocaleData(localeVi);

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
  list = [0, 1, 2, 3, 4];
  startWeek: Date;
  endWeek: Date;
  currentDate = new Date();
  listDate = [];
  constructor() { }

  ngOnInit() {
    this.startWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    this.endWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 5
    );
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });

  }
  nextWeek() {
    this.startWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 7
    );
    this.endWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 5
    );
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
  }
  preWeek() {
    this.startWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() - 7
    );
    this.endWeek = new Date(
      this.startWeek.getFullYear(),
      this.startWeek.getMonth(),
      this.startWeek.getDate() + 5
    );
    this.listDate = eachDayOfInterval({
      start: this.startWeek,
      end: this.endWeek,
    });
  }
}
@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule
  ],
  exports: [MenuComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'vi-VN' }],
  entryComponents: [MenuComponent],
})
export class MenuModule {

}
