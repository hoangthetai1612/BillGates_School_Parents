import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactBookPageRoutingModule } from './contact-book-routing.module';

import { ContactBookPage } from './contact-book.page';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/base/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactBookPageRoutingModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [ContactBookPage]
})
export class ContactBookPageModule {}
