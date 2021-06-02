/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { StudentModel } from 'src/app/models/student.model';
import { AbsenceRequestService } from 'src/app/service/absence-request.service';
import { AuthStoreService } from 'src/app/service/auth.store';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.scss'],
})
export class LeaveDetailComponent implements OnInit {
  studentAbsenceRequests = [];
  studentId: number;
  classId = localStorage.getItem('classId');
  student: StudentModel;

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
      backbutton: 'backbutton',
    },
  };

  constructor(
    private routerActive: ActivatedRoute,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private absenceRequestService: AbsenceRequestService
  ) {}

  ngOnInit() {
    this.studentId = this.routerActive.snapshot.params.studentId;
    this.getStudentAbsenceRequests();
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudentsByClass(this.classId).subscribe((res) => {
      this.student = res.find(
        (student) => student.StudentId === this.studentId
      );
      this.header.iconCenter.text = `${this.student.LastName} (${this.student.ClassName})`;
    });
  }

  getStudentAbsenceRequests() {
    this.teacherService
      .getStudentAbsenceRequest(this.studentId)
      .subscribe((res: any) => {
        this.studentAbsenceRequests = res.map((item) => {
          return {
            CreatedOn: item.CreatedOn,
            FromDate: item.FromDate,
            ToDate: item.ToDate,
            Description: item.Description,
            StudentMediaURL: item.StudentMediaURL,
            Status: item.Status,
            isDetail: true,
            StudentAbsenceRequestId: item.StudentAbsenceRequestId,
          };
        });
      });
  }

  approveAbsenceRequests(studentAbsenceRequestId) {
    const absenceRequest = {
      Status: 2,
    };
    this.absenceRequestService
      .approveAbsenceRequests(studentAbsenceRequestId, absenceRequest)
      .subscribe((res) => {
        this.getStudentAbsenceRequests();
      });
  }
}
