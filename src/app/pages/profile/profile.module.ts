import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { HeaderModule } from 'src/app/base/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    BaseButtonModule,
    HeaderModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
