import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/base/header/header.component';
import { RoleDirective, RoleDirectiveModule } from 'src/app/base/util/directives/role.directive';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import localeVi from "@angular/common/locales/vi";
registerLocaleData(localeVi);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    RoleDirectiveModule
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'vi-VN' }
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
