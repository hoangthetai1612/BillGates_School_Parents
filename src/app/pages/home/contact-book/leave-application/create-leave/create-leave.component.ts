/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AbsenceRequestService } from 'src/app/service/absence-request.service';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.scss'],
})
export class CreateLeaveComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white text-15 ',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconRight: '',
    iconCenter: {
      text: 'Tạo đơn xin nghỉ học',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      image: 'image',
      isText: false,
      // couple: 'couple',
      // backbutton: 'backbutton'
    },
  };
  // defaultHref = 'main/home/contact-book';

  formLeave = new FormGroup({
    FromDate: new FormControl(''),
    ToDate: new FormControl(''),
    Description: new FormControl(''),
  });
  constructor(
    private modalController: ModalController,
    private absenceRequestService: AbsenceRequestService
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss({
      // dismissed: true
    });
  }

  createLeave() {
    console.log(this.formLeave.value);
    this.absenceRequestService.create(this.formLeave.value).subscribe((res) => {
      console.log(res);
    });
  }
}
