import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as EventEmitter from 'events';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-list-item',
  templateUrl: './base-list-item.component.html',
  styleUrls: ['./base-list-item.component.scss'],
})
export class BaseListItemComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() { }

}

@NgModule({
  declarations: [BaseListItemComponent],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [BaseListItemComponent]
})

export class BaseListItemModule { }
