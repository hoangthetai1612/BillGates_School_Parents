/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginService } from 'src/app/service/login.service';
import { CreateChatComponent } from './create-chat/create-chat.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: '',
    iconRight: '',
    iconCenter: {
      text: 'Tin nhắn',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      // backbutton: 'backbutton'
    },
  };

  headerTeacher = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: '',
    iconRight: 'assets/icon/add-icon.svg',
    iconCenter: {
      text: 'Tin nhắn',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      // backbutton: 'backbutton'
    },
  };

  messageList = [
    {
      SenderUserId: 1,
      SenderName: 'Phùng Thanh Hằng',
      SenderMediaURL: 'assets/icon/avatar.svg',
      UnreadCount: 2,
      UpdatedOn: '12/12/2020',
      Content: 'Chào cô',
    },
  ];
  constructor(
    private modalController: ModalController,
    private loginService: LoginService
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering

  ngOnInit() {}

  async openAddPerson() {
    const modal = await this.modalController.create({
      component: CreateChatComponent,
    });
    return await modal.present();
  }
}
