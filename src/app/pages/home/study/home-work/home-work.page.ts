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
  private searchTerms = new Subject<string>();

  constructor(
    private homeworkService: HomeWorkService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.authStoreService.classId$.subscribe((res) => {
      this.classId = res;
    });
    this.classId = 1;
    this.search.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        switchMap((term: string) =>
          this.homeworkService.list({
            ClassId: this.classId,
            keyword: term,
          })
        )
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.log(err),
        () => console.log('comp')
      );
  }
}
