import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactBookPageRoutingModule } from './contact-book-routing.module';

import { ContactBookPage } from './contact-book.page';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/base/header/header.component';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactBookPageRoutingModule,
    RouterModule,
    HeaderModule,
    RoleDirectiveModule
  ],
  declarations: [ContactBookPage]
})
export class ContactBookPageModule {}
