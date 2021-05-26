import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

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
  news;
  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.setNews();
  }
  getNews() {
    let req = {
      pageNumber: 1,
      pageSize: 20
    }
    this.newsService.getNews(req).subscribe(res => {
      this.news = res;
    })
  }
  setNews() {
    const dataObject = {
      Title: 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      CreatedByName:  'Anh',
      MediaURL:  'assets/svg/image-post.svg',
      Description:  'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi',
      URLLink:  'contact-book',
      CreatedOn:  new Date()
    }
    this.news = [];
    for (let i = 0; i < 10; i++) {
      this.news.push(dataObject);
    }
  }
}
