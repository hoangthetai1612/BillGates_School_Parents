import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  header = {
    cssClass: 'header-basic',
    classText: 'text-black',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: 'assets/svg/icon-avt-home.svg',
    iconCenter: {
      image: 'assets/svg/icon-logo.png',
    },
    type: {
      image: 'image',
      isText: true,
    },
  };
  data = [
    {
      mediaURL: 'assets/svg/image-post.svg',
      title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      date: '12/12/20',
    },
    {
      mediaURL: 'assets/svg/image-post.svg',
      title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      date: '12/12/20',
    },
    {
      mediaURL: 'assets/svg/image-post.svg',
      title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      date: '12/12/20',
    },
    {
      mediaURL: 'assets/svg/image-post.svg',
      title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      date: '12/12/20',
    },
    {
      mediaURL: 'assets/svg/image-post.svg',
      title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      date: '12/12/20',
    },
    {
      mediaURL: 'assets/svg/image-post.svg',
      title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      date: '12/12/20',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
