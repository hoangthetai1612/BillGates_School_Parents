import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { AuthStoreService } from 'src/app/service/auth.store';
import { HomeWorkService } from 'src/app/service/homework.service';

@Component({
  selector: 'app-detail-home-work',
  templateUrl: './detail-home-work.component.html',
  styleUrls: ['./detail-home-work.component.scss'],
})
export class DetailHomeWorkComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Bài tập về nhà',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  classId;
  data;
  HomeworkId;
  constructor(
    private router: ActivatedRoute,
    private homeworkService: HomeWorkService,
    private authStoreService: AuthStoreService,

  ) { }

  ngOnInit() {
    this.HomeworkId = this.router.snapshot.params.id
    this.authStoreService.classId$.subscribe((res) => {
      this.classId = res;
    });
    this.getListHomeWork();
  }
  getListHomeWork() {
    const keywork = '';
    this.homeworkService.getListHomeWork(this.classId, keywork).subscribe(res => {
      this.data = res.find(x => x.HomeworkId == this.HomeworkId)
    })
  }

}
@NgModule({
  declarations: [DetailHomeWorkComponent],
  imports: [
    IonicModule,
    CommonModule,
    HeaderModule
  ],
  exports: [DetailHomeWorkComponent],
})
export class DetailHomeWorkModule { }