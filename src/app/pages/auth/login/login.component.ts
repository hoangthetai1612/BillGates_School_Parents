import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { HeaderModule } from 'src/app/base/header/header.component';

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
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      image: 'image',
      isText: true
    }

  };
  buttonStyle = {
    width: "100%",
    cssClass: "buttonDarkOrange",
    text: "Đăng nhập",
  }
  constructor() { }

  ngOnInit() { }
  login = (ev) => {

  }
}
@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    HeaderModule,
    BaseButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {

}
