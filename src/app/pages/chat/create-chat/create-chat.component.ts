import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.scss'],
})
export class CreateChatComponent implements OnInit {
  header = {
    cssClass: 'header-white',
    classText: 'text-black-small',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Tin nhắn mới',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
      blackBackButtonColor: 'black'
    }

  }

  data = [];

  chatData = [
    {
      id: 1,
      name: 'Đinh Thanh Nam',
      imageUrl: ''
    },
    {
      id: 1,
      name: 'Phùng Thanh Nga',
      imageUrl: ''
    }
  ];

  isHidden = false;

  constructor() { }

  ngOnInit() {
    this.data.length = 5;
  }

  searchAccount(event: any) {
    if (event.target.value.length !== 0) {
      this.isHidden = true;
    } else this.isHidden = false;
  }

}
