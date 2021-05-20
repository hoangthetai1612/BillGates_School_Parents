import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.scss'],
})
export class LeaveDetailComponent implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white-small',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconCenter: {
      text: 'Phùng Thanh Hưng',
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
      status: 1,
      isDetail: true
    },
    {
      createdDate: '15/05/2021',
      name: 'Nguyễn Khánh Huyền',
      startDate: '8:00 16/05/2021',
      endDate: '17:00 18/05/2021',
      description: `Gia đình em có kế hoạch đi du lịch vào cuối tuần tới. 
      Nên em viết đơn xin được nghỉ học 2 ngày cuối tuần. 
      Em xin hứa sẽ học và chép bài đầy đủ mà không làm ảnh hưởng đến việc học tập của mình`,
      status: 2,
      isDetail: true
    }
  ]

  constructor() { }

  ngOnInit() { }

}
