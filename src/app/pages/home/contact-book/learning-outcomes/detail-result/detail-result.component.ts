/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestResult } from 'src/app/models/test-result.model';
import { AuthStoreService } from 'src/app/service/auth.store';
import { TestResultService } from 'src/app/service/test-result.service';

@Component({
  selector: 'app-detail-result',
  templateUrl: './detail-result.component.html',
  styleUrls: ['./detail-result.component.scss'],
})
export class DetailResultComponent implements OnInit {
  @Input() name;
  @Input() semsterId;
  @Input() subjectId;
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconRight: '',
    iconCenter: {
      text: 'Kết quả học tập',
    },
    type: {
      text: 'text',
      image: 'image',
      isText: false,
    },
  };

  listPoint: TestResult[] = [
    // { TestResultId: 1, Point: 8, TestTypeName: '1 tiết' },
    // { TestResultId: 1, Point: 8, TestTypeName: '15 phút' },
    // { TestResultId: 1, Point: 8, TestTypeName: 'giữa kỳ' },
  ];
  studentId;
  constructor(
    private modalController: ModalController,
    private testResultService: TestResultService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.authStoreService.studentId$.subscribe((res) => (this.studentId = res));
    this.getDetalTestResult();
  }
  closeModal() {
    this.modalController.dismiss({});
  }

  getDetalTestResult() {
    this.testResultService
      .getDetailTestById(this.studentId, this.semsterId, this.subjectId)
      .subscribe((res) => {
        this.listPoint = res;
      });
  }
}
