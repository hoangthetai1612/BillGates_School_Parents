import { Component, OnInit } from '@angular/core';
import { TeacherModel } from 'src/app/models/teacher.model';
import { AbsenceRequestService } from 'src/app/service/absence-request.service';
import { TeacherService } from 'src/app/service/teacher.service';

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

  constructor(
    private absenceRequestService: AbsenceRequestService,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.getStudentAbsenceRequests();
  }


  getStudentAbsenceRequests() {
    this.teacherService.getTeacher().subscribe(res => {
      this.teacher = res;
      this.classId = this.teacher.ClassId;
      this.absenceRequestService.getStudentAbsenceRequests(this.classId).subscribe(res => {
        this.absences = res;
        console.log('absences', this.absences);

      });
    });

  }

}
