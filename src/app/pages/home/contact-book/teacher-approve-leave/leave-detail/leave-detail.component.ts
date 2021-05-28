import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.scss'],
})
export class LeaveDetailComponent implements OnInit {
  data
  header = {
    cssClass: 'header-special',
    classText: 'text-white-small',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconRight: '',
    iconCenter: {
      text: '',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }
  };

  StudentAbsenceRequestId: number;
  constructor(
    private routerActive: ActivatedRoute,
    private teacherService: TeacherService

  ) { }

  ngOnInit() {
    this.StudentAbsenceRequestId = this.routerActive.snapshot.params.id
    this.teacherService.getDetailTeacher(this.StudentAbsenceRequestId).subscribe((res: any) => {
      this.data = res
    })
  }

}
