import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackPageRoutingModule } from './feedback-routing.module';

import { FeedbackPage } from './feedback.page';
import { BaseCardFeedbackModule } from 'src/app/base/base-card-feedback/base-card-feedback.component';
import { HeaderModule } from 'src/app/base/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackPageRoutingModule,
    BaseCardFeedbackModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  declarations: [FeedbackPage],
})
export class FeedbackPageModule {}
