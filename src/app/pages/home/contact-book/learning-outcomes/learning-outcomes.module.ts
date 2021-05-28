import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningOutcomesPageRoutingModule } from './learning-outcomes-routing.module';

import { LearningOutcomesPage } from './learning-outcomes.page';
import { HeaderModule } from 'src/app/base/header/header.component';
import { DetailResultComponent } from './detail-result/detail-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningOutcomesPageRoutingModule,
    HeaderModule,
  ],
  declarations: [LearningOutcomesPage, DetailResultComponent],
})
export class LearningOutcomesPageModule {}
