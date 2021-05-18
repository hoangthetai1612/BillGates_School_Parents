import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
listCard = [
  {
    title: 'Lan can tầng 3 nhà B',
    content: 'Lan can tầng 3 nhà B sắp đổ, đề nghị nhà trường nhanh chóng sửa tránh tai nạn xảy ra',
    date: '18:30 Hôm nay',
    img: 'assets/contact-book/avatar.svg'
  },
  {
    title: 'Lan can tầng 3 nhà B',
    content: 'Lan can tầng 3 nhà B sắp đổ, đề nghị nhà trường nhanh chóng sửa tránh tai nạn xảy ra',
    date: '18:30 Hôm nay',
    img: 'assets/contact-book/avatar.svg'
  },
  {
    title: 'Lan can tầng 3 nhà B',
    content: 'Lan can tầng 3 nhà B sắp đổ, đề nghị nhà trường nhanh chóng sửa tránh tai nạn xảy ra',
    date: '18:30 Hôm nay',
    img: 'assets/contact-book/avatar.svg'
  },
];
  constructor() { }

  ngOnInit() {
  }

}
