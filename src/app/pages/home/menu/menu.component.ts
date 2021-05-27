import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import startOfWeek from 'date-fns/startOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import localeVi from "@angular/common/locales/vi";
import { MenuService } from 'src/app/service/menu.service';
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
  dayValue = -1;
  indexWeek = 0;
  focusWeek = 0;
  dishMenus = [
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Cá thu chiên sốt cà chua',
      "MenuId": 1,
      "DayValue": 1,
      "Type": 1,
      "Status": 0,
      "OldDishName": 'Cá diêu hồng chiên sốt cà chua'
    },
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Cá thu chiên sốt cà chua',
      "MenuId": 1,
      "DayValue": 1,
      "Type": 1,
      "Status": 0,
    },
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Cá thu chiên sốt cà chua',
      "MenuId": 1,
      "DayValue": 2,
      "Type": 2,
      "Status": 0,
      "OldDishName": 'Cá diêu hồng chiên sốt cà chua'
    },
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Bò xào cần tỏi',
      "MenuId": 1,
      "DayValue": 2,
      "Type": 2,
      "Status": 0,
    },
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Bò xào cần tỏi',
      "MenuId": 1,
      "DayValue": 1,
      "Type": 1,
      "Status": 0,
    },
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Bò xào cần tỏi',
      "MenuId": 1,
      "DayValue": 2,
      "Type": 1,
      "Status": 0,
    },
    {
      "DishMenuId": 1,
      "DishId": 2,
      "DishName": 'Bò xào cần tỏi',
      "MenuId": 1,
      "DayValue": 2,
      "Type": 1,
      "Status": 0,
    }
  ];

  constructor(private menuService: MenuService, public datepipe: DatePipe) { }

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
    this.indexWeek++;
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
    this.indexWeek--;
  }
  getDishMenu(dayValue) {
    this.dayValue = dayValue;
    this.focusWeek = this.indexWeek;
    let req = {
      FromDate: this.datepipe.transform(this.startWeek, "yyyy-MM-dd'T'HH:mm:ss"),
      ToDate: this.datepipe.transform(this.endWeek, "yyyy-MM-dd'T'HH:mm:ss"),
      ClassId: 25,
      DayValue: dayValue
    }
    this.menuService.getDishMenuByTimePeriod(req).subscribe(res => {
      this.dishMenus = res
    })
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
