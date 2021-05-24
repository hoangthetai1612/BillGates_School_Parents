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
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule { }
