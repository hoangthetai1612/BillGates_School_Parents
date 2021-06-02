import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherModel } from 'src/app/models/teacher.model';
import { AbsenceRequestService } from 'src/app/service/absence-request.service';
import { AuthStoreService } from 'src/app/service/auth.store';
import { TeacherService } from 'src/app/service/teacher.service';
import { DetailAbsenceRequest } from '../../../../models/detail-absence-request.model';
@Component({
  selector: 'app-teacher-approve-leave',
  templateUrl: './teacher-approve-leave.page.html',
  styleUrls: ['./teacher-approve-leave.page.scss'],
})
export class TeacherApproveLeavePage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white-small',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconRight: '',
    iconCenter: {
      text: 'Danh sách đơn xin nghỉ học',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }
  };

  absences = [];
  teacher: TeacherModel;
  classId: number;
  absenceRequest: DetailAbsenceRequest;

  constructor(
    private absenceRequestService: AbsenceRequestService,
    private authStore: AuthStoreService,
    private teacherService: TeacherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStudentAbsenceRequests();
  }


  getStudentAbsenceRequests() {
    this.authStore.classId$.subscribe(res => {
      this.classId = res;
      localStorage.setItem('classId', this.classId.toString());
      this.absenceRequestService.getStudentAbsenceRequests(this.classId).subscribe(res => {
        this.absences = res;
      });
    });
  }

  viewAbsenceRequestsDetail(value) {
    this.router.navigate([`/main/home/contact-book/teacher-approve-leave/${value}`]);
  }

  approveAbsenceRequests(studentAbsenceRequestId) {
    this.absenceRequest.Status = 2;
    this.absenceRequestService.approveAbsenceRequests(studentAbsenceRequestId, this.absenceRequest).subscribe(res => {
      this.getStudentAbsenceRequests();
    })
  }

}
