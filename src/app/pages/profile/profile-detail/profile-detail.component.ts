import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { PhotoService } from 'src/app/service/photo.service';

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
      backbutton: 'backbutton'
    }

  };
  arrImgae = [];
  avt: string;
  constructor(
    public photoService: PhotoService
  ) { }

  ngOnInit() { }
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
    IonicModule,
    HeaderModule
  ],
  exports: [ProfileDetailComponent]
})
export class ProfileDetailModule {

}