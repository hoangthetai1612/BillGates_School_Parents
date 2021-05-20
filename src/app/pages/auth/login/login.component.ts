import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, IonRouterOutlet } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { HeaderModule } from 'src/app/base/header/header.component';
import { ModalController } from '@ionic/angular';
import { ForgotComponent } from '../forgot/forgot.component';
import { ModalService } from 'src/app/service/modal.service';
import { InputUsernameComponent } from '../forgot/input-username/input-username.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  header = {
    cssClass: 'header-basic',
    classText: 'text-black',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      image: 'image',
      isText: true
    }

  };
  buttonStyle = {
    width: "100%",
    cssClass: "buttonDarkOrange",
    text: "Đăng nhập",
  }
  rootPage: any;
  constructor(public modalController: ModalController, private modalService: ModalService, private routerOutlet: IonRouterOutlet) { }
  ngOnInit() { }

  login = (ev) => {
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

}
@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    HeaderModule,
    BaseButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {

}
