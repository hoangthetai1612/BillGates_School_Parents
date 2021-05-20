import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, IonRouterOutlet } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { HeaderModule } from 'src/app/base/header/header.component';
import { ModalController } from '@ionic/angular';
import { ForgotComponent } from '../forgot/forgot.component';
import { ModalService } from 'src/app/service/modal.service';
import { InputUsernameComponent } from '../forgot/input-username/input-username.component';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

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
      isText: true,
    },
  };
  data = {
    password: '123456aA',
    username: '0964554300',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    grant_type: ['password'],
  };
  buttonStyle = {
    width: '100%',
    cssClass: 'buttonDarkOrange',
    text: 'Đăng nhập',
  };
  rootPage: any;
  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    public modalController: ModalController,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet,
    private loginService: LoginService,
    private router: Router
  ) {}
  ngOnInit() {}

  login() {
    this.loginService
      .login({
        username: this.formLogin.get('username').value,
        password: this.formLogin.get('password').value,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        grant_type: ['password'],
      })
      .subscribe(
        (res) => {
          localStorage.setItem('access_token', JSON.stringify(res));
          this.router.navigate(['/main/home']);
        },
        (err) => {}
      );
  }
  presentModal() {
    this.modalService.presentModal({
      presentingElement: this.routerOutlet.nativeEl,
      component: ForgotComponent,
      cssClass: 'modal-full-height',
      mode: 'md',
      componentProps: {
        rootPage: InputUsernameComponent,
      },
    });
  }
}
@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    HeaderModule,
    BaseButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
