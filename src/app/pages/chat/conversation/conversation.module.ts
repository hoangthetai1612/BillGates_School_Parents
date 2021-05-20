import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversationPageRoutingModule } from './conversation-routing.module';

import { ConversationPage } from './conversation.page';
import { RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';
import {
  CiMessageListModule,
  CiMessageTextModule,
} from '@consult-indochina/websocket';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversationPageRoutingModule,
    CiMessageListModule,
    CiMessageTextModule,
    RoleDirectiveModule,
  ],
  declarations: [ConversationPage],
})
export class ConversationPageModule {}
