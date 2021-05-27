import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { HomeWork } from 'src/app/models/homework.model';
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
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton',
    },
  };
  listHomeWork$!: Observable<HomeWork[]>;
  search = new FormControl('');
  private searchTerms = new Subject<string>();

  constructor(private homeworkService: HomeWorkService) {}

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        startWith(''),
        switchMap((term: string) => {
          return this.homeworkService.getListHomeWork(25, term);
        })
      ).subscribe();
  }
}
