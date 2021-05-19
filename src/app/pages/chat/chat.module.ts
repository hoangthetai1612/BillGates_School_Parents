import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { HeaderModule } from 'src/app/base/header/header.component';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    HeaderModule,
    RoleDirectiveModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
