import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { HeaderModule } from 'src/app/base/header/header.component';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';
import { CreateChatComponent } from './create-chat/create-chat.component';
import { BaseListItemModule } from 'src/app/base/base-list-item/base-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    HeaderModule,
    RoleDirectiveModule,
    BaseListItemModule
  ],
  declarations: [ChatPage, CreateChatComponent]
})
export class ChatPageModule { }
