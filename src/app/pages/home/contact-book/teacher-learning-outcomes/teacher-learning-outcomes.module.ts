import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherLearningOutcomesPageRoutingModule } from './teacher-learning-outcomes-routing.module';

import { TeacherLearningOutcomesPage } from './teacher-learning-outcomes.page';

import { HeaderModule } from 'src/app/base/header/header.component';
import { LearningOutcomesPageModule } from '../learning-outcomes/learning-outcomes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherLearningOutcomesPageRoutingModule,
    HeaderModule,
    LearningOutcomesPageModule
  ],
  declarations: [TeacherLearningOutcomesPage]
})
export class TeacherLearningOutcomesPageModule { }
