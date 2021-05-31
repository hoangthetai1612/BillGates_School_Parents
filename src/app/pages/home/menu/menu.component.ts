import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { MenuService } from 'src/app/service/menu.service';

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
  dishMenus =[];

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
    const valueToday = getDay(new Date())
    this.dayValue = valueToday;
    this.getDishMenu(valueToday)
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
    this.dayValue = dayValue-1;
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
  providers: [DatePipe, ],
  entryComponents: [MenuComponent],
})
export class MenuModule {
}
