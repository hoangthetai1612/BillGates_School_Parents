import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursewarePageRoutingModule } from './courseware-routing.module';

import { CoursewarePage } from './courseware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursewarePageRoutingModule
  ],
  declarations: [CoursewarePage]
})
export class CoursewarePageModule {}
