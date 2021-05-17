import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactBookPageRoutingModule } from './contact-book-routing.module';

import { ContactBookPage } from './contact-book.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactBookPageRoutingModule,
    RouterModule
  ],
  declarations: [ContactBookPage]
})
export class ContactBookPageModule {}
