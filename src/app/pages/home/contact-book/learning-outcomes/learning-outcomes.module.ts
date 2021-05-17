import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningOutcomesPageRoutingModule } from './learning-outcomes-routing.module';

import { LearningOutcomesPage } from './learning-outcomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningOutcomesPageRoutingModule
  ],
  declarations: [LearningOutcomesPage]
})
export class LearningOutcomesPageModule {}
