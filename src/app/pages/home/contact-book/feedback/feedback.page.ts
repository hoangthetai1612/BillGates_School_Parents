import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white text-15',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Góp ý với nhà trường',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton',
    },
  };
  defaultHref = 'main/home/contact-book';
  listCard = [
    {
      title: 'Lan can tầng 3 nhà B',
      content:
        'Lan can tầng 3 nhà B sắp đổ, đề nghị nhà trường nhanh chóng sửa tránh tai nạn xảy ra',
      date: '18:30 Hôm nay',
      img: 'assets/contact-book/avatar.svg',
      isFeedback: true,
    },
    {
      title: 'Lan can tầng 3 nhà B',
      content:
        'Lan can tầng 3 nhà B sắp đổ, đề nghị nhà trường nhanh chóng sửa tránh tai nạn xảy ra',
      date: '18:30 Hôm nay',
      img: 'assets/contact-book/avatar.svg',
      isFeedback: false,
    },
    {
      title: 'Lan can tầng 3 nhà B',
      content:
        'Lan can tầng 3 nhà B sắp đổ, đề nghị nhà trường nhanh chóng sửa tránh tai nạn xảy ra',
      date: '18:30 Hôm nay',
      img: 'assets/contact-book/avatar.svg',
      isFeedback: true,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
