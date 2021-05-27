/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { SemsterModel } from 'src/app/models/semster.model';
import { Subject } from 'src/app/models/subject.model';
import { AuthStoreService } from 'src/app/service/auth.store';
import { SemsterService } from 'src/app/service/semster.service';
import { SubjectService } from 'src/app/service/subject.service';
import { DetailResultComponent } from './detail-result/detail-result.component';

@Component({
  selector: 'app-learning-outcomes',
  templateUrl: './learning-outcomes.page.html',
  styleUrls: ['./learning-outcomes.page.scss'],
})
export class LearningOutcomesPage implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  @Input() data;

  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Kết quả học tập',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  listSubject: Subject[] = [
    // { SubjectId: 1, Name: 'Toán 10', Description: 'string' },
    // { SubjectId: 1, Name: 'Toán 10', Description: 'string' },
    // { SubjectId: 1, Name: 'Toán 10', Description: 'string' },
    // { SubjectId: 1, Name: 'Toán 10', Description: 'string' },
  ];
  listTerm: SemsterModel[] = [
    {
      SemesterId: 1,
      Name: 'adfdscsd',
      Description: 'dasdvasd',
      StartDate: new Date(),
      EndDate: new Date(),
    },
    {
      SemesterId: 2,
      Name: 'adfdscsd',
      Description: 'dasdvasd',
      StartDate: new Date(),
      EndDate: new Date(),
    },
    {
      SemesterId: 3,
      Name: 'adfdscsd',
      Description: 'dasdvasd',
      StartDate: new Date(),
      EndDate: new Date(),
    },
  ];
  currentTerm;
  classId;
  studentId;

  constructor(
    private modalController: ModalController,
    private subjectService: SubjectService,
    private semsterService: SemsterService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.authStoreService.classId$.subscribe((res) => {
      this.classId = res;
    });
    this.getListSemster();
    this.getListSubject(this.listTerm[0].SemesterId);
  }
  getListSemster() {
    this.semsterService.list().subscribe((res) => {
      this.listTerm = res;
      console.log(res);
    });
  }
  sliderChanges() {
    this.slides.getActiveIndex().then((id) => {
      this.currentTerm = this.listTerm[id].SemesterId;
      this.getListSubject(this.currentTerm);
    });
  }
  getListSubject(semsterId) {
    this.subjectService
      .getListSubjectByTerm(semsterId, this.classId)
      .subscribe((res) => {
        this.listSubject = res;
      });
  }

  async openDetail(item) {
    const modal = await this.modalController.create({
      component: DetailResultComponent,
      componentProps: {
        name: item.Name,
        semsterId: this.currentTerm,
        subjectId: item.SubjectId,
      },
    });
    return await modal.present();
  }

  prev() {
    this.slides.slidePrev();
  }
  next() {
    this.slides.slideNext();
  }
}
