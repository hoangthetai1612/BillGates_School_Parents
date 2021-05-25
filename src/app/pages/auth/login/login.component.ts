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
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
    },
    type: {
      image: 'image',
      isText: true,
    },
  };

  buttonStyle = {
    width: '100%',
    cssClass: 'buttonDarkOrange',
    text: 'Đăng nhập',
  };
  rootPage: any;
  loginForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet,
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      grant_type: ['password'],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() { }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem('access_token', JSON.stringify(res));
        this.router.navigate(['/main/home']);
      },
      (err) => { }
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
export class LoginModule { }
