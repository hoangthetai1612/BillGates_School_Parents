import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReviewModel } from '../models/review.model';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewService extends BaseApiService<ReviewModel> {
  constructor(protected http: HttpClient) {
    super(http, 'api/review');
  }
  getListReview(): Observable<ReviewModel[]> {
    return this.http
      .get('api/review/username/parent')
      .pipe(map((res: any) => res.Payload));
  }
}
