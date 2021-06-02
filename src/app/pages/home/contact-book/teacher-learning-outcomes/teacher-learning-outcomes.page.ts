import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StudentService } from 'src/app/service/student.service';
import { LearningOutcomesPage } from '../learning-outcomes/learning-outcomes.page';

@Component({
  selector: 'app-teacher-learning-outcomes',
  templateUrl: './teacher-learning-outcomes.page.html',
  styleUrls: ['./teacher-learning-outcomes.page.scss'],
})
export class TeacherLearningOutcomesPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconRight: '',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconCenter: {
      text: 'Kết quả học tập',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }
  };

  students = [];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.getStudentsByTeacher();
  }

  getStudentsByTeacher() {
    this.studentService.getStudentsByTeacher().subscribe(res => {
      this.students = res;
    });
  }

  async openDetailResult(item) {
    localStorage.setItem('studentId', item.StudentId);
    const modal = await this.modalController.create({
      component: LearningOutcomesPage,
      componentProps: { data: item }
    });
    return await modal.present();
  }

}
