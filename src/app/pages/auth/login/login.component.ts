/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { PushNotifications, } from '@capacitor/push-notifications';
import { IonicModule, IonRouterOutlet, ModalController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { HeaderModule } from 'src/app/base/header/header.component';
import { AuthStoreService } from 'src/app/service/auth.store';
import { LoginService } from 'src/app/service/login.service';
import { ModalService } from 'src/app/service/modal.service';
import { ProfileService } from 'src/app/service/profile.service';
import { ToastService } from 'src/app/service/toast.service';
import { ForgotComponent } from '../forgot/forgot.component';
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
    iconCenter: {},
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
    private fb: FormBuilder,
    private toastService: ToastService,
    private profileService: ProfileService,
    private authStoreService: AuthStoreService
  ) {
    this.loginForm = this.fb.group({
      grant_type: ['password'],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initPush();
  }
  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      this.registerPush();
    }
  }
  registerPush() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  login() {
    this.loginService
      .login(this.loginForm.value)
      .pipe(
        concatMap((res) => {
          localStorage.setItem('access_token', JSON.stringify(res));
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/main/home']);
          if (res.Role === 'Parent') {
            localStorage.setItem('role', 'parents');
          }

          if (res.Role === 'Teacher') {
            localStorage.setItem('role', 'teacher');
          }
          return this.profileService.getProfile();
        }),
        tap((res: any) => {
          console.log(res);
          if (localStorage.getItem('role') === 'parents') {
            this.authStoreService.set({ ClassId: res[0].ClassId });
            this.authStoreService.set({ StudentId: res[0].StudentId });
          } else {
            this.authStoreService.set({ ClassId: res.ClassId });
            this.authStoreService.set({ StudentId: res.StudentId });
          }
        }),
        catchError((err) => {
          if (err.status === 400) {
            this.toastService.showError('Sai tên tài khoản hoặc mật khẩu!');
          }
          return throwError(err);
        })
      )
      .subscribe();
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
