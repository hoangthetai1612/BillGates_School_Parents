import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {
  checked = 1;
  tabConfig= [
    {
      link: 'home',
      label: 'Trang chủ',
      imgPath: 'assets/icon/home.svg'
    },
    {
      link: 'noti',
      label: 'Thông báo',
      imgPath: 'assets/icon/noti.svg'
    },
    {
      link: 'course-ware',
      label: '',
      imgPath: 'assets/icon/cap.svg'
    },
    {
      link: 'chat',
      label: 'Tin nhắn',
      imgPath: 'assets/icon/chat.svg'
    },
    {
      link: 'profile',
      label: 'Tài khoản',
      imgPath: 'assets/icon/profile.svg'
    },
  ];
  constructor() {}

}
