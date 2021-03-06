import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

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
    iconRight: '',
    iconCenter: {
      text: 'Sổ liên lạc',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  constructor() {}

  ngOnInit() {}
}
