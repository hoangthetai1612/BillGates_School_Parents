import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { RoleDirective, RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    RoleDirectiveModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
