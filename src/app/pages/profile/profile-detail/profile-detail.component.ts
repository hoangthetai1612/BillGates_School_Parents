/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { PhotoService } from 'src/app/service/photo.service';
import {
  RoleDirective,
  RoleDirectiveModule,
} from 'src/app/base/util/directives/role.directive';
import { FormsModule } from '@angular/forms';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';

import { ProfileService } from 'src/app/service/profile.service';
import { ProfileModel } from 'src/app/models/profile.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
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
  profileTeacher
  data
  buttonStyle = {
    width: '160px',
    cssClass: 'buttonDarkOrange',
    text: 'Hoàn thành',
  };
  profile: ProfileModel
  constructor(
    public photoService: PhotoService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getProfileTeacher();
    this.updateProfile();
  }
  getProfile() {
    this.profileService.getProfile().subscribe((res) => {
      this.profile = res[0];
      console.log(this.profile);

    });
  }
  getProfileTeacher() {
    this.profileService.getDetailProfileTeacher().subscribe((res) => {
      this.profileTeacher = res;
    });
  }
  updateProfile() {
    this.profile.MediaURL = this.avt;
    this.profileService
      .updateProfile(this.profile.MediaURL)
      .subscribe((res) => {
        this.getProfile()
        this.getProfileTeacher()
      });
  }
  changePhoto() {
    this.photoService.addNewToGallery().then(() => {
      this.arrImgae = this.photoService.photos;
      this.avt = this.arrImgae[0].base64;
    });
  }
}
@NgModule({
  declarations: [ProfileDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RoleDirectiveModule,
    BaseButtonModule,
  ],
  exports: [ProfileDetailComponent],
})
export class ProfileDetailModule { }
