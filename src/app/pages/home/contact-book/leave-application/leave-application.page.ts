import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateLeaveComponent } from './create-leave/create-leave.component';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.page.html',
  styleUrls: ['./leave-application.page.scss'],
})
export class LeaveApplicationPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white text-16',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: 'assets/contact-book/icon-create.svg',
    iconCenter: {
      text: 'Đơn xin nghỉ học',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton'
    }

  };
  defaultHref = 'main/home/contact-book';
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
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async createLeave() {
    const modal = await this.modalController.create({
      component: CreateLeaveComponent,
    });
    return await modal.present();
  }

}
