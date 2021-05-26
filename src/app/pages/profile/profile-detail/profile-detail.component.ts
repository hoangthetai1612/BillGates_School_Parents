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
  profileParent = {
    ParentId: 1,
    StudentId: 2,
    LastName: ' Trần Huyền Diệu',
    Phone: '0968744046',
    StudentLastName: ' Trần duy',
    StudentPhone: '09687421561',
    StudentMediaURL:
      'https://ca.slack-edge.com/TUZA24EAJ-U013SHQETU5-g8a6f2e13a04-512',
    LocationAddress: ' 193 phú diẽn',
    ClassName: '5A',
    ClassId: 3,
  };
  profileTeacher = {
    ParentId: 1,
    StudentId: 2,
    LastName: ' Trần Huyền Diệu',
    Phone: '0968744046',
    StudentLastName: ' Trần duy',
    StudentPhone: '09687421561',
    MediaURL:
      'https://ca.slack-edge.com/TUZA24EAJ-U013SHQETU5-g8a6f2e13a04-512',
    LocationAddress: ' 193 phú diẽn',
    ClassName: '5A',
    ClassId: 3,
  };
  buttonStyle = {
    width: '160px',
    cssClass: 'buttonDarkOrange',
    text: 'Hoàn thành',
  };
  // profileParent: ProfileModel
  constructor(
    public photoService: PhotoService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {}
  getProfileParent() {
    this.profileService.getProfileParent().subscribe((res) => {
      this.profileParent = res;
    });
  }
  getProfileTeacher() {
    this.profileService.getDetailProfileTeacher().subscribe((res) => {
      this.profileParent = res;
    });
  }
  updateProfileParent() {
    this.profileParent.StudentMediaURL = this.avt;
    console.log(this.profileParent);
    this.profileService
      .updateProfileParent(this.profileParent)
      .subscribe((res) => {
        console.log(this.profileParent);
      });
  }
  updateProfileTeacher() {
    this.profileParent.StudentMediaURL = this.avt;
    console.log(this.profileParent);
    this.profileService
      .updateProfileTeacher(this.profileParent)
      .subscribe((res) => {
        console.log(this.profileParent);
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
export class ProfileDetailModule {}
