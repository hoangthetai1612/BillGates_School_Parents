import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.page.html',
  styleUrls: ['./contact-book.page.scss'],
})
export class ContactBookPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: 'assets/svg/icon-avt-home.svg',
    iconCenter: {
      text: 'Sổ liên lạc',
      // image: 'assets/svg/icon-logo.svg'
    },
    typecenter: {
      text: 'Sổ liên lạc',
      // image: 'image',
      couple: 'single'
    }

  };
  constructor() { }

  ngOnInit() {
  }

}
