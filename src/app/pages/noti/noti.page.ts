import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// import { NotificationService } from 'src/app/service/notification.service';
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
  keyword: string;
  constructor(
    public popoverController: PopoverController,
    // private notiService: NotificationService
  ) { }
  listNotification = [
    {
      NotificationId: 1,
      AnnouncementId: 2,
      Title: 'Thay đổi về thời khóa biểu',
      Content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      CreatedOne: '13:30, hôm nay',
      MediaURL: 'assets/svg/icon-item-noti.svg'
    },
    {
      NotificationId: 1,
      AnnouncementId: 3,
      Title: 'Thay đổi về thời khóa biểu',
      Content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      CreatedOne: '13:30, hôm nay',
      MediaURL: 'assets/svg/icon-item-noti.svg'
    },
    {
      NotificationId: 1,
      AnnouncementId: 3,
      Title: 'Thay đổi về thời khóa biểu',
      Content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      CreatedOne: '13:30, hôm nay',
      MediaURL: 'assets/svg/icon-item-noti.svg'
    },
    {
      NotificationId: 1,
      AnnouncementId: 4,
      Title: 'Thay đổi về thời khóa biểu',
      Content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      datCreatedOne: '13:30, hôm nay',
      MediaURL: 'assets/svg/icon-item-noti.svg'
    }
  ]
  ngOnInit() {
    // this.keyword = 'aaaa'
    //   this.notiService.getAllNotification(this.keyword).subscribe(res => {
    //     this.listNotification = res;
    //   })

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterNotiComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    this.listNotification = data
    console.log(data);

  }

}
