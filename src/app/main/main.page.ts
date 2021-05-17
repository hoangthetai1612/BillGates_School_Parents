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
      imgPath: ''
    },
    {
      link: 'noti',
      label: 'Thông báo',
      imgPath: ''
    },
    {
      link: 'course-ware',
      label: '',
      imgPath: ''
    },
    {
      link: 'chat',
      label: 'Tin nhắn',
      imgPath: ''
    },
    {
      link: 'profile',
      label: 'Tài khoản',
      imgPath: ''
    },
  ]
  constructor() {}

}
