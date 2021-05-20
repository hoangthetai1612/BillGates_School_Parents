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

  fakeData = [
    {
      id: 1,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 2,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 3,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 4,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 5,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 6,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 7,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 8,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 9,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 10,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    }
  ];

  isHidden = false;

  constructor() { }

  ngOnInit() {

  }

  searchAccount(event: any) {
    if (event.target.value.length !== 0) {
      this.isHidden = true;
    } else this.isHidden = false;
  }

}

