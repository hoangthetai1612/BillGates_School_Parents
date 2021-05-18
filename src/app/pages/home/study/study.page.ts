import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {
  header = {
    cssClass: 'header-basic',
    classText: 'text-black',
    iconLeft: 'assets/svg/back.svg',
    iconRight: 'assets/svg/icon-avt-home.svg',
    iconCenter: {
      text: 'Học liệu',
      // image: 'assets/svg/icon-logo.svg'
    },
    typecenter: {
      // text: 'text',
      image: 'image',
      // couple: 'couple'
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
