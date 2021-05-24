import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalService } from 'src/app/service/modal.service';
import { PhotoService } from 'src/app/service/photo.service';
import { ForgotComponent } from '../auth/forgot/forgot.component';
import { InputUsernameComponent } from '../auth/forgot/input-username/input-username.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Tài khoản',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }

  };

  arrImgae = [];
  avt: string;
  constructor(
    public photoService: PhotoService,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }
  presentModal() {
    this.modalService
      .presentModal({
        presentingElement: this.routerOutlet.nativeEl,
        component: ForgotComponent,
        cssClass: "modal-full-height",
        mode: 'md',
        componentProps: {
          rootPage: InputUsernameComponent,
        },
      })
  }
  changePhoto() {
    this.photoService.addNewToGallery().then(() => {
      this.arrImgae = this.photoService.photos;
      this.avt = this.arrImgae[0].base64;
    });
  }
}
