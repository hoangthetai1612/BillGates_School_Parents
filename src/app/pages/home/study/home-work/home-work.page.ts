import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { HomeWork } from 'src/app/models/homework.model';
import { AuthStoreService } from 'src/app/service/auth.store';
import { HomeWorkService } from 'src/app/service/homework.service';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.page.html',
  styleUrls: ['./home-work.page.scss'],
})
export class HomeWorkPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Bài tập về nhà',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  listHomeWork$!: Observable<HomeWork[]>;
  search = new FormControl('');
  classId: number;

  constructor(
    private homeworkService: HomeWorkService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.authStoreService.classId$.subscribe((res) => {
      this.classId = res;
    });
    this.listHomeWork$ = this.search.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      startWith(''),
      switchMap((term: string) =>
        this.homeworkService.getListHomeWork(this.classId, term)
      )
    );
  }
}
