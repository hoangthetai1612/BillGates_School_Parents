/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { ProfileModel } from 'src/app/models/profile.model';
import { LoginService } from 'src/app/service/login.service';
import { ModalService } from 'src/app/service/modal.service';
import { PhotoService } from 'src/app/service/photo.service';
import { ProfileService } from 'src/app/service/profile.service';
import { ForgotComponent } from '../auth/forgot/forgot.component';
import { InputConfirmComponent } from '../auth/forgot/input-confirm/input-confirm.component';
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
      backbutton: 'backbutton',
    },
  };
  arrImgae = [];
  avt: string;
  profile: ProfileModel;
  profileTeacher;
  constructor(
    public photoService: PhotoService,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private profileService: ProfileService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getProfileTeacher();

  }
  getProfile() {
    this.profileService.getProfile().subscribe(res => {
      this.profile = res[0]
      console.log(this.profile);

    })
  }
  getProfileTeacher() {
    this.profileService.getDetailProfileTeacher().subscribe((res) => {
      this.profileTeacher = res;
    });
  }

  presentModal() {
    this.modalService.presentModal({
      presentingElement: this.routerOutlet.nativeEl,
      component: ForgotComponent,
      cssClass: 'modal-full-height',
      mode: 'md',
      componentProps: {
        rootPage: InputConfirmComponent,
      },
    });
  }
  changePhoto() {
    this.photoService.addNewToGallery().then(() => {
      this.arrImgae = this.photoService.photos;
      this.avt = this.arrImgae[0].base64;
    });
  }

  logOut() {
    const device = JSON.parse(localStorage.getItem('access_token')).device;
    this.loginService.postDevice(device).subscribe(res => {
    })
    localStorage.clear();
    this.router.navigate(['index/auth/login']);
  }
}
