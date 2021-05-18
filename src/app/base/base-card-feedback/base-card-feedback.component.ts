import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-card-feedback',
  templateUrl: './base-card-feedback.component.html',
  styleUrls: ['./base-card-feedback.component.scss'],
})
export class BaseCardFeedbackComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {}

}
@NgModule({
  declarations: [BaseCardFeedbackComponent],
  imports: [IonicModule, CommonModule],
  exports: [BaseCardFeedbackComponent]
})

export class BaseCardFeedbackModule {}
