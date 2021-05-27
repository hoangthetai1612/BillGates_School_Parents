import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-list-item',
  templateUrl: './base-list-item.component.html',
  styleUrls: ['./base-list-item.component.scss'],
})
export class BaseListItemComponent implements OnInit {
  @Input() data;
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleRouterLink = (item) => {
    this.callback.emit(item);
  };

}

@NgModule({
  declarations: [BaseListItemComponent],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [BaseListItemComponent]
})

export class BaseListItemModule { }
