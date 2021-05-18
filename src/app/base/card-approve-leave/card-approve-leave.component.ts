import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-card-approve-leave',
  templateUrl: './card-approve-leave.component.html',
  styleUrls: ['./card-approve-leave.component.scss'],
})
export class CardApproveLeaveComponent implements OnInit {
  @Input() date;
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleCallbackEvent = (type) => {
    this.callback.emit(type);
  };

}

@NgModule({
  declarations: [CardApproveLeaveComponent],
  imports: [IonicModule, CommonModule],
  exports: [CardApproveLeaveComponent]
})

export class CardApproveLeaveModule { }
