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
  listCard: DetailAbsenceRequest[] = [
    // {
    //   StudentAbsenceRequestId: 1,
    //   FromDate: new Date(),
    //   ToDate: new Date(),
    //   Description: 'addsavcdvasdcdsavsdavcsdvfsa',
    //   Type: 1,
    //   Status: 1,
    // },
    // {
    //   StudentAbsenceRequestId: 1,
    //   FromDate: new Date(),
    //   ToDate: new Date(),
    //   Description: 'addsavcdvasdcdsavsdavcsdvfsa',
    //   Type: 1,
    //   Status: 2,
    // },
  ];
  constructor(
    public modalController: ModalController,
    private absenceRequestService: AbsenceRequestService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.getListAbsence();
  }
  getListAbsence() {
    this.authStoreService.studentId$.subscribe((id) => {
      this.absenceRequestService.getListAbsenceById(id).subscribe((res) => {
        this.listCard = res;
      });
    });
  }
  async createLeave() {
    const modal = await this.modalController.create({
      component: CreateLeaveComponent,
    });
    modal.onDidDismiss().then((res) => {
      this.getListAbsence();
    });
    return await modal.present();
  }
}
