/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AbsenceRequestService } from 'src/app/service/absence-request.service';
import { AuthStoreService } from 'src/app/service/auth.store';

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
    },
    type: {
      text: 'text',
      image: 'image',
      isText: false,
    },
  };

  formLeave = new FormGroup({
    FromDate: new FormControl(''),
    ToDate: new FormControl(''),
    Description: new FormControl(''),
    Type: new FormControl(''),
    StudentId: new FormControl(0),
  });
  constructor(
    private modalController: ModalController,
    private absenceRequestService: AbsenceRequestService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  createLeave() {
    this.absenceRequestService.create(this.formLeave.value).subscribe((res) => {
      this.closeModal();
    });
    this.authStoreService.studentId$.subscribe((id) => {
      this.formLeave.get('StudentId').setValue(id);
    });
  }
}
