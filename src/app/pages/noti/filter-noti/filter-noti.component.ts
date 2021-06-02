/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { NotificationModel } from 'src/app/models/notification.model';
import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-filter-noti',
  templateUrl: './filter-noti.component.html',
  styleUrls: ['./filter-noti.component.scss'],
})
export class FilterNotiComponent implements OnInit {
  constructor(
    public popoverController: PopoverController,
    private notiService: NotificationService
  ) { }

  titleFilter = [
    {
      id: null,
      title: 'Tất cả',
    },
    {
      id: 0,
      title: 'Thông báo tự động',
    },
    {
      id: 2,
      title: 'Thông báo admin',
    },
  ];
  data
  keyword: string;
  ngOnInit() {
    this.keyword = ''
    this.notiService.getAllNotification(this.keyword).subscribe(res => {
      this.data = res;
    })
  }

  DismissClick(item) {
    if (item === 0) {
      const listdata = this.data.filter((x) => x.AnnouncementId == 0);
      this.popoverController.dismiss(listdata);
      console.log(listdata);

    } else if (item === null) {
      this.keyword = ''
      this.notiService.getAllNotification(this.keyword).subscribe(res => {
        this.popoverController.dismiss(res);
      })
    } else {
      const listdata = this.data.filter((x) => x.AnnouncementId !== 0);
      this.popoverController.dismiss(listdata);
      console.log(listdata);
    }
  }
}
@NgModule({
  declarations: [FilterNotiComponent],
  imports: [IonicModule, CommonModule, HttpClientModule],
  exports: [FilterNotiComponent],
})
export class FiterModule { }
