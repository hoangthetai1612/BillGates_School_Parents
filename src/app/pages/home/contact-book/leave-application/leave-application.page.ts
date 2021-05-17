import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.page.html',
  styleUrls: ['./leave-application.page.scss'],
})
export class LeaveApplicationPage implements OnInit {
listCard = [
  {
    currentDate: '10/10/2021',
    startDate: '20/10/2021',
    endDate: '21/10/2021',
    isApprove: true,
    // eslint-disable-next-line max-len
  content: 'Gia đình em có kế hoạch đi du lịch vào cuối tuần tới. Nên em viết đơn xin được nghỉ học 2 ngày cuối tuần. Em xin hứa sẽ học và chép bài đầy đủ mà không làảnh hưởng đến học tập của mình.'
},

{
  currentDate: '10/10/2021',
  startDate: '20/10/2021',
  endDate: '21/10/2021',
  isApprove: false,
  // eslint-disable-next-line max-len
  content: 'Gia đình em có kế hoạch đi du lịch vào cuối tuần tới. Nên em viết đơn xin được nghỉ học 2 ngày cuối tuần. Em xin hứa sẽ học và chép bài đầy đủ mà không làảnh hưởng đến học tập của mình.'
},
{
  currentDate: '10/10/2021',
  startDate: '20/10/2021',
  endDate: '21/10/2021',
  isApprove: true,
  // eslint-disable-next-line max-len
  content: 'Gia đình em có kế hoạch đi du lịch vào cuối tuần tới. Nên em viết đơn xin được nghỉ học 2 ngày cuối tuần. Em xin hứa sẽ học và chép bài đầy đủ mà không làảnh hưởng đến học tập của mình.'
}
];
  constructor() { }

  ngOnInit() {
  }

}
