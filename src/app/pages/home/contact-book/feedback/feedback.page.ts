/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewModel } from 'src/app/models/review.model';
import { AuthStoreService } from 'src/app/service/auth.store';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white text-15',
    iconLeft: 'assets/svg/icon-phone-home.svg',
    iconRight: '',
    iconCenter: {
      text: 'Góp ý với nhà trường',
      // image: 'assets/svg/icon-logo.png'
    },
    type: {
      text: 'text',
      // image: 'image',
      // couple: 'couple',
      backbutton: 'backbutton',
    },
  };
  defaultHref = 'main/home/contact-book';

  formReview = new FormGroup({
    Title: new FormControl(''),
    Description: new FormControl(''),
    Type: new FormControl(4),
    StudentId: new FormControl(1),
  });
  listCard: ReviewModel[] = [
    {
      ReviewId: 1,
      Title: 'sdcdscsdcsd',
      Description: 'adaffgdvdg',
      Type: 4,
      Rating: 4,
      Status: 1,
      StudentMediaURL: 'assets/contact-book/avatar.svg',
    },
    {
      ReviewId: 1,
      Title: 'sdcdscsdcsd',
      Description: 'adaffgdvdg',
      Type: 4,
      Rating: 4,
      Status: 2,
      StudentMediaURL: 'assets/contact-book/avatar.svg',
    },
    {
      ReviewId: 1,
      Title: 'sdcdscsdcsd',
      Description: 'adaffgdvdg',
      Type: 4,
      Rating: 4,
      Status: 1,
      StudentMediaURL: 'assets/contact-book/avatar.svg',
    },
  ];
  constructor(
    private reviewService: ReviewService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit() {
    this.authStoreService.studentId$.subscribe((res) => {
      this.formReview.get('StudentId').setValue(res);
    });
  }

  getListReview() {
    this.reviewService.list().subscribe((res) => {
      this.listCard = res;
    });
  }

  createReview() {
    this.reviewService.create(this.formReview.value).subscribe((res) => {
      console.log(res);
    });
    console.log(this.formReview.value);
  }
}
