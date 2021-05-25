import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { NotificationModel } from 'src/app/models/notification.model';
// import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-filter-noti',
  templateUrl: './filter-noti.component.html',
  styleUrls: ['./filter-noti.component.scss'],

})
export class FilterNotiComponent implements OnInit {


  constructor(
    public popoverController: PopoverController,
    // private notiService: NotificationService
  ) { }
  data = [
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
      CreatedOne: '13:30, hôm nay',
      MediaURL: 'assets/svg/icon-item-noti.svg'
    }
  ]
  titleFilter = [
    {
      id: 2,
      title: 'Tất cả'
    },
    {
      id: 3,
      title: 'Thông báo tự động'
    },
    {
      id: 4,
      title: 'Thông báo admin'
    }
  ]
  // data: NotificationModel
  keyword: string;
  ngOnInit() {
  }
  // getAllNotification() {
  //   this.keyword = 'aaaa'
  //   this.notiService.getAllNotification(this.keyword).subscribe(res => {
  //     this.data = res;
  //   })
  // }

  async DismissClick(item) {
    console.log(item);
    const listdata = this.data.filter(x => x.AnnouncementId == item)
    console.log(listdata);

    await this.popoverController.dismiss(listdata);
  }
}
@NgModule({
  declarations: [FilterNotiComponent],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [FilterNotiComponent],
})
export class FiterModule {

}
