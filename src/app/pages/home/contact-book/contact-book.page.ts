import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.page.html',
  styleUrls: ['./contact-book.page.scss'],
})
export class ContactBookPage implements OnInit {
  header = {
    cssClass: 'header-basic',
    classText: 'text-black',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: 'assets/svg/icon-avt-home.svg',
    iconCenter: {
      // text: 'Thông báo',
      image: 'assets/svg/icon-logo.svg'
    },
    typecenter: {
      // text: 'text',
      image: 'image',
      // couple: 'couple'
    }

  };
  constructor() { }

  ngOnInit() {
  }

}
