import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeWork } from '../models/homework.model';
import { BaseApiService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class TimeTableService extends BaseApiService<HomeWork> {
  constructor(protected http: HttpClient) {
    super(http, 'api/TimeTableLesson');
  }
  getTimeTable(DayValue, ClassId, FromDate, ToDate): Observable<any> {
    return this.http
      .get(this.actionUrl, {
        params: {
          DayValue: DayValue,
          ClassId: ClassId,
          FromDate: FromDate,
          ToDate: ToDate,
        },
      })
      .pipe(map((res: any) => res.Payload));
  }
}
