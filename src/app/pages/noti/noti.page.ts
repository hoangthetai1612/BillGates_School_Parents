/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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
  queryField: FormControl = new FormControl();
  constructor(
    public popoverController: PopoverController,
    private notiService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }
  listNotification: NotificationModel;
  ngOnInit() {
    this.keyword = ''
    this.notiService.getAllNotification(this.keyword).subscribe(res => {
      this.listNotification = res;
      console.log(this.listNotification);

    })

    this.filterServerSide();
  }
  filterServerSide() {
    this.queryField.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(500), switchMap((keyword: string) =>
        this.notiService.getAllNotification(keyword)))
      .subscribe(res => {
        console.log(res);
        this.listNotification = res;

      });
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
    this.listNotification = data;
    console.log(data);
  }
}
