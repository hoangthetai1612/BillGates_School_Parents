/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailAbsenceRequest } from 'src/app/models/detail-absence-request.model';
import { AbsenceRequestService } from 'src/app/service/absence-request.service';
import { AuthStoreService } from 'src/app/service/auth.store';
import { CreateLeaveComponent } from './create-leave/create-leave.component';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.page.html',
  styleUrls: ['./leave-application.page.scss'],
})
export class LeaveApplicationPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white text-16',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: 'assets/contact-book/icon-create.svg',
    iconCenter: {
      text: 'Đơn xin nghỉ học',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  defaultHref = 'main/home/contact-book';
  listCard: DetailAbsenceRequest[] = [];
  constructor(
    public modalController: ModalController,
    private absenceRequestService: AbsenceRequestService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.getListAbsence();
  }
  getListAbsence() {
    let list;
    this.authStoreService.studentId$.subscribe((id) => {
      this.absenceRequestService.getListAbsenceById(id).subscribe(
        (res) => {
          list = res;
        },
        (err) => {},
        () => {
          this.listCard = list.reverse();
        }
      );
    });
  }
  async createLeave() {
    const modal = await this.modalController.create({
      component: CreateLeaveComponent,
    });
    modal.onDidDismiss().then((res) => {
      console.log('close');

      this.getListAbsence();
    });
    return await modal.present();
  }
}
