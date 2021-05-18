import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-approve-leave',
  templateUrl: './card-approve-leave.component.html',
  styleUrls: ['./card-approve-leave.component.scss'],
})
export class CardApproveLeaveComponent implements OnInit {
  @Input() date;

  constructor() { }

  ngOnInit() { }

}

@NgModule({
  declarations: [CardApproveLeaveComponent],
  imports: [IonicModule, CommonModule],
  exports: [CardApproveLeaveComponent]
})

export class CardApproveLeaveModule { }
