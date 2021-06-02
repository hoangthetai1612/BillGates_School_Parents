/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewModel } from 'src/app/models/review.model';
import { AuthStoreService } from 'src/app/service/auth.store';
import { ReviewService } from 'src/app/service/review.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/service/toast.service';

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
    },
    type: {
      text: 'text',
      backbutton: 'backbutton',
    },
  };
  defaultHref = 'main/home/contact-book';

  formReview = new FormGroup({
    Title: new FormControl(null),
    Description: new FormControl(null),
    Type: new FormControl(4),
    StudentId: new FormControl(1),
  });
  listCard: ReviewModel[] = [
    // {
    //   ReviewId: 1,
    //   Title: 'sdcdscsdcsd',
    //   Description: 'adaffgdvdg',
    //   Type: 4,
    //   Rating: 4,
    //   Status: 1,
    //   StudentMediaURL: 'assets/contact-book/avatar.svg',
    // },
    // {
    //   ReviewId: 1,
    //   Title: 'sdcdscsdcsd',
    //   Description: 'adaffgdvdg',
    //   Type: 4,
    //   Rating: 4,
    //   Status: 2,
    //   StudentMediaURL: 'assets/contact-book/avatar.svg',
    // },
    // {
    //   ReviewId: 1,
    //   Title: 'sdcdscsdcsd',
    //   Description: 'adaffgdvdg',
    //   Type: 4,
    //   Rating: 4,
    //   Status: 1,
    //   StudentMediaURL: 'assets/contact-book/avatar.svg',
    // },
  ];
  constructor(
    private reviewService: ReviewService,
    private authStoreService: AuthStoreService,
    private route: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.authStoreService.studentId$.subscribe((res) => {
      this.formReview.get('StudentId').setValue(res);
    });
    this.getListReview();
  }

  getListReview() {
    this.reviewService.getListReview().subscribe((res) => {
      this.listCard = res.reverse();
    });
  }

  cancelReview() {
    console.log(this.formReview.get('Title').value);

    if (
      this.formReview.get('Title').value == null ||
      this.formReview.get('Description').value == null
    ) {
      this.route.navigate(['/main/home/contact-book']);
    } else {
      this.formReview.reset();
    }
  }

  createReview() {
    if (
      this.formReview.get('Title').value == null ||
      this.formReview.get('Description').value == null
    ) {
      this.toastService.showError('Vui lòng nhập đầy đủ thông tin');
    } else {
      this.reviewService.create(this.formReview.value).subscribe((res) => {
        this.getListReview();
        this.toastService.showSuccess('Tạo góp ý thành công!');
      });
      this.formReview.reset();
    }
  }
}
