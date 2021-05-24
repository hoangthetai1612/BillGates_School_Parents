import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewModel } from 'src/app/models/new.model';
import { ApiService } from 'src/app/service/api.service';

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
  data: NewModel[] = [];
  recv: any;
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.setNews();
  }
  setNews() {
    const dataObject: NewModel = new NewModel();
    dataObject.Title = 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi';
    dataObject.CreatedByName = 'Anh';
    dataObject.MediaURL = 'assets/svg/image-post.svg';
    dataObject.Description = 'Khai giảng khóa học kỹ năng sống cho trẻ từ 3-6 tuổi';
    dataObject.URLLink = 'contact-book';
    dataObject.CreatedOn = new Date();
    for (let i = 0; i < 10; i++) {
      this.data.push(dataObject);
    }
    let paramReq = {
      pageNumber: 1,
      pageSize: 20
    }
    this.apiService.get('news', paramReq)
      .subscribe(n => this.recv = n, null, () => {
        this.data = this.recv;
      });
  }
  open() {
    console.log("đs");

    this.router.navigateByUrl('');
  }
}
