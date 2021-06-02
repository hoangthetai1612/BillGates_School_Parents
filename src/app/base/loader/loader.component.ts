import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs';
import { LoaderService } from '../util/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.isLoading.unsubscribe();
  }

}

@NgModule({
  declarations: [LoaderComponent],
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [LoaderComponent]
})

export class LoaderModule { }
