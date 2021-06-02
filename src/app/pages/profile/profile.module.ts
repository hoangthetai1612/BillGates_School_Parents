import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';
import { ProfilePage } from './profile.page';
import { BaseButtonModule } from 'src/app/base/base-button/base-button.component';
import { HeaderModule } from 'src/app/base/header/header.component';
import { RouterModule } from '@angular/router';
import { ProfileDetailModule } from './profile-detail/profile-detail.component';
import { InputConfirmModule } from '../auth/forgot/input-confirm/input-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    BaseButtonModule,
    HeaderModule,
    RouterModule,
    RoleDirectiveModule,
    ProfileDetailModule,
    InputConfirmModule,
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
