import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushNotifications, } from '@capacitor/push-notifications';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {
  checked = 0;
  tabConfig = [
    {
      link: 'home',
      label: 'Trang chủ',
      imgPath: 'assets/icon/home.svg'
    },
    {
      link: 'noti',
      label: 'Thông báo',
      imgPath: 'assets/icon/noti.svg'
    },
    {
      link: 'course-ware',
      label: '',
      imgPath: 'assets/icon/cap.svg'
    },
    {
      link: 'chat',
      label: 'Tin nhắn',
      imgPath: 'assets/icon/chat.svg'
    },
    {
      link: 'profile',
      label: 'Tài khoản',
      imgPath: 'assets/icon/profile.svg'
    },
  ];
  data
  constructor(
    private loginService: LoginService,
  ) { }

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
        console.log(token);
        alert('Push registration success, token: ' + token.value);
        localStorage.setItem('device', token.value);
        const device = token.value;
        const userName = JSON.parse(localStorage.getItem('access_token')).username;
        this.data = {
          userName,
          device
        }
        this.loginService.postDevice(this.data).subscribe(res => {
        })
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

}
