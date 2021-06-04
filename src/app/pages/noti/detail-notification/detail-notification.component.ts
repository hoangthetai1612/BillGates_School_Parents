import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.scss'],
})
export class DetailNotificationComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Thông báo',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  detailNoti: any;
  AnnouncementId
  constructor(
    private notiService: NotificationService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.AnnouncementId = this.router.snapshot.params.id;
    this.getAllNotification();

  }
  getAllNotification() {
    const keyword = ''
    this.notiService.getAllNotification(keyword).subscribe(res => {
      this.detailNoti = res.find(x => x.AnnouncementId == this.AnnouncementId);
    })
  }
}
@NgModule({
  declarations: [DetailNotificationComponent],
  imports: [
    IonicModule,
    CommonModule,
    HeaderModule
  ],
  exports: [DetailNotificationComponent],
})
export class DetailNotificationModule { }