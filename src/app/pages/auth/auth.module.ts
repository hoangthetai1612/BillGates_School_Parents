import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AuthComponent } from './auth.component';
import { AuthPageRoutingModule } from './auth-routing.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthPageRoutingModule,
    ],
    declarations: [AuthComponent]
})
export class AuthPageModule { }
