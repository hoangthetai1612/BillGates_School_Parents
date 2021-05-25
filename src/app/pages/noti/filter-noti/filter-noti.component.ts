import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-filter-noti',
  templateUrl: './filter-noti.component.html',
  styleUrls: ['./filter-noti.component.scss'],
})
export class FilterNotiComponent implements OnInit {


  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() { }
  async DismissClick() {
    await this.popoverController.dismiss();
  }
}
@NgModule({
  declarations: [FilterNotiComponent],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [FilterNotiComponent]
})
export class FiterModule {

}
