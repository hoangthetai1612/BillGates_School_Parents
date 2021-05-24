import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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
  private searchTerms = new Subject<string>();

  constructor(private homeworkService: HomeWorkService) {}

  ngOnInit() {
    this.listHomeWork$ = this.homeworkService.getListHomeWork(25, '');
    this.listHomeWork$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.homeworkService.getListHomeWork(25, term)
      )
    );
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
