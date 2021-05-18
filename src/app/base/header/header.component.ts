import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
interface HeaderStyle {
  cssClass: string;
  classText: string;
  iconLeft: any;
  iconRight: any;
  iconCenter: any;
  type: any;


}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerStyle: HeaderStyle;
  @Input() defaultHref = 'main/home';
  @Input() text;
  @Output() callback = new EventEmitter();
  buttonIcon = 'assets/svg/icon-backbutton.svg';

  constructor() { }

  ngOnInit() {

  }
  handleCallbackEvent = (type) => {
    this.callback.emit(type);
  };

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
