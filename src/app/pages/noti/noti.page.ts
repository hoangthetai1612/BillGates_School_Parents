import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.page.html',
  styleUrls: ['./noti.page.scss'],
})
export class NotiPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-noti.png',
    iconRight: 'assets/svg/icon-filter-noti.png',
    iconCenter: {
      text: 'Thông báo',
    },
    type: {
      text: 'text',
    }
  };
  data = [
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
    {
      mediaURL: 'assets/svg/icon-item-noti.svg',
      title: 'Thay đổi về thời khóa biểu',
      content: 'Thời khóa biểu tuần 3 tháng 4 lớp đã được thay đổi.',
      date: '13:30, hôm nay'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
