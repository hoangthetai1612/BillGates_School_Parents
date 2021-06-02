/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgModule, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';
import { from, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { NotificationModel } from 'src/app/models/notification.model';
import { NotificationService } from 'src/app/service/notification.service';
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
    },
  };
  keyword: string;
  queryField: FormControl = new FormControl('');
  constructor(
    public popoverController: PopoverController,
    private notiService: NotificationService,
    private cd: ChangeDetectorRef,
    private route: Router
  ) { }
  listNotification: Observable<NotificationModel[]>;
  ngOnInit() {
    this.getAllNotification();
  }

  getAllNotification() {
    this.keyword = '';
    this.listNotification = this.queryField.valueChanges
      .pipe(startWith(''), distinctUntilChanged(), debounceTime(300), switchMap((keyword: string) =>
        this.notiService.getAllNotification(keyword)));
  }
  routeTo(item) {
    if (item.NotificationId) {
      this.notiService.updateStatusNoti(item.NotificationId).subscribe((res) => {
        switch (item.Type) {
          case 5:
            this.route.navigateByUrl('/main/home/study/timetable');
            break;
          case 6:
            this.route.navigateByUrl('/main/home/contact-book/teacher-approve-leave');
            break;
          case 7:
            this.route.navigateByUrl('/main/home/contact-book/feedback');
            break;
          case 8:
            this.route.navigateByUrl('/main/home/study/home-work');
            break;
        }
        this.getAllNotification();
      })
    }
    if (item.AnnouncementId) {
      this.notiService.updateStatusAnnouncementId(item.AnnouncementId).subscribe((res) => {
        switch (item.Type) {
          case 5:
            this.route.navigateByUrl('/main/home/study/timetable');
            break;
          case 6:
            this.route.navigateByUrl('/main/home/contact-book/teacher-approve-leave');
            break;
          case 7:
            this.route.navigateByUrl('/main/home/contact-book/feedback');
            break;
          case 8:
            this.route.navigateByUrl('/main/home/study/home-work');
            break;
        }
        this.getAllNotification();

      })
    }


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
    this.listNotification = of(data);
  }
}
