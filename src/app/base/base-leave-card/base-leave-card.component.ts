import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-leave-card',
  templateUrl: './base-leave-card.component.html',
  styleUrls: ['./base-leave-card.component.scss'],
})
export class BaseLeaveCardComponent implements OnInit {
  @Input() date;

  constructor() { }

  ngOnInit() {}

}
@NgModule({
  declarations: [BaseLeaveCardComponent],
  imports: [IonicModule, CommonModule],
  exports: [BaseLeaveCardComponent]
})

export class BaseLeaveCardModule {}
