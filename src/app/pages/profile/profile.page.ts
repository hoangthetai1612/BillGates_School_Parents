/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalService } from 'src/app/service/modal.service';
import { PhotoService } from 'src/app/service/photo.service';
import { ProfileService } from 'src/app/service/profile.service';
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
      backbutton: 'backbutton',
    },
  };

  arrImgae = [];
  avt: string;
  profile = {
    ParentId: 1,
    StudentId: 2,
    LastName: " Trần Huyền Diệu",
    Phone: "0968744046",
    StudentLastName: " Trần duy",
    StudentPhone: "09687421561",
    StudentMediaURL: "https://ca.slack-edge.com/TUZA24EAJ-U013SHQETU5-g8a6f2e13a04-512",
    LocationAddress: " 193 phú diẽn",
    ClassName: "5A",
    ClassId: 3,
    MediaURL: "https://ca.slack-edge.com/TUZA24EAJ-U013SHQETU5-g8a6f2e13a04-512",
  }

  constructor(
    public photoService: PhotoService,
    private modalService: ModalService,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getProfile();

  }
  getProfile() {
    this.profileService.getProfile().subscribe(res => {
      this.profile = res
    })
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
  changePhoto() {
    this.photoService.addNewToGallery().then(() => {
      this.arrImgae = this.photoService.photos;
      this.avt = this.arrImgae[0].base64;
    });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['index/auth/login']);
  }
}
