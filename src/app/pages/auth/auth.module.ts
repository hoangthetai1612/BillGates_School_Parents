import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';
import { AuthPageRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AuthPageRoutingModule, ReactiveFormsModule],
  declarations: [AuthComponent],
})
export class AuthPageModule { }
