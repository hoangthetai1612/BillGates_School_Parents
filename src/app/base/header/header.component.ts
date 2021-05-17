import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
interface HeaderStyle {
  cssClass: string;
  classText: string;
  iconLeft: any;
  iconRight: any;
  iconCenter: any;
  typecenter: any;


}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerStyle: HeaderStyle;

  constructor() { }

  ngOnInit() {
  }

}



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }