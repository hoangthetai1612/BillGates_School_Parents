import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { PhotoService } from 'src/app/service/photo.service';
import { ProfileService } from 'src/app/service/profile.service';

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
  profileInfo = {
    ParentId: 1,
    StudentId: 2,
    LastName: " Trần Huyền Diệu",
    Phone: "0968744046",
    StudentLastName: " Trần duy",
    StudentPhone: "09687421561",
    StudentMediaURL: "https://ca.slack-edge.com/TUZA24EAJ-U013SHQETU5-g8a6f2e13a04-512",
    LocationAddress: " 193 phú diẽn",
    ClassName: "5A",
    ClassId: 3
  }
  constructor(
    public photoService: PhotoService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getProfile()
  }
  getProfile() {
    this.profileService.getProfile().subscribe(res => {
      this.profileInfo = res
    })
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
    IonicModule,
    HeaderModule
  ],
  exports: [ProfileDetailComponent]
})
export class ProfileDetailModule {

}