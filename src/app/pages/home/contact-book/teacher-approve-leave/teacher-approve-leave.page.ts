import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-approve-leave',
  templateUrl: './teacher-approve-leave.page.html',
  styleUrls: ['./teacher-approve-leave.page.scss'],
})
export class TeacherApproveLeavePage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconCenter: {
      text: 'Danh sách đơn xin nghỉ học',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }
  };

  data = [
    {
      createdDate: '15/05/2021',
      name: 'Phùng Thanh Hưng',
      startDate: '8:00 16/05/2021',
      endDate: '17:00 18/05/2021',
      description: `Gia đình em có kế hoạch đi du lịch vào cuối tuần tới. 
      Nên em viết đơn xin được nghỉ học 2 ngày cuối tuần. 
      Em xin hứa sẽ học và chép bài đầy đủ mà không làm ảnh hưởng đến việc học tập của mình`,
      status: 1
    },
    {
      createdDate: '15/05/2021',
      name: 'Nguyễn Khánh Huyền',
      startDate: '8:00 16/05/2021',
      endDate: '17:00 18/05/2021',
      description: `Gia đình em có kế hoạch đi du lịch vào cuối tuần tới. 
      Nên em viết đơn xin được nghỉ học 2 ngày cuối tuần. 
      Em xin hứa sẽ học và chép bài đầy đủ mà không làm ảnh hưởng đến việc học tập của mình`,
      status: 2
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
