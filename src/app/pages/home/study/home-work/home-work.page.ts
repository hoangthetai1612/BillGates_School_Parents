import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.page.html',
  styleUrls: ['./home-work.page.scss'],
})
export class HomeWorkPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Bài tập về nhà',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton',
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
