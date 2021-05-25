import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FilterNotiComponent } from './filter-noti/filter-noti.component';


@Component({
  selector: 'app-noti',
  templateUrl: './noti.page.html',
  styleUrls: ['./noti.page.scss'],
})
export class NotiPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-noti.png',
    iconRight: 'assets/svg/icon-filter-noti.png',
    iconCenter: {
      text: 'Thông báo',
    },
    type: {
      text: 'text',
    }
  };
  data = [
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
  ]
  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterNotiComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

}
