import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  noti;
  constructor(
    private loginService: LoginService,
    private route: Router
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
        localStorage.setItem('device', token.value);
        const GUID = token.value;
        const username = JSON.parse(localStorage.getItem('access_token')).username;
        this.data = {
          username,
          GUID
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

      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification) => {
        this.noti = JSON.stringify(notification);
        // switch (data.messageType) {
        //   case '5':
        //     this.route.navigateByUrl('/main/home/study/timetable');
        //     break;
        //   case 6:
        //     this.route.navigateByUrl('/main/home/contact-book/teacher-approve-leave');
        //     break;
        //   case 7:
        //     this.route.navigateByUrl('/main/home/contact-book/feedback');
        //     break;
        //   case 8:
        //     this.route.navigateByUrl('/main/home/study/home-work');
        //     break;
        // }

        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

}
