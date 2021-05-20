import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as EventEmitter from 'events';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-approve-leave',
  templateUrl: './card-approve-leave.component.html',
  styleUrls: ['./card-approve-leave.component.scss'],
})
export class CardApproveLeaveComponent implements OnInit {
  @Input() data;
  @Output() callback = new EventEmitter();


  constructor() { }

  ngOnInit() { }

  handleCallbackEvent = (type) => {
    this.callback.emit(type);
  };

}

@NgModule({
  declarations: [CardApproveLeaveComponent],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [CardApproveLeaveComponent]
})

export class CardApproveLeaveModule { }
