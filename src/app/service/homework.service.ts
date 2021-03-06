/* eslint-disable @typescript-eslint/naming-convention */
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeWork } from '../models/homework.model';
import { BaseApiService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class HomeWorkService extends BaseApiService<HomeWork> {
  constructor(protected http: HttpClient) {
    super(http, 'api/homework');
  }
  getListHomeWork(ClassId, keyword: string): Observable<HomeWork[]> {
    return this.http
      .get(this.actionUrl, {
        params: {
          ClassId,
          keyword,
        },
      })
      .pipe(map((res: any) => res.Payload));
  }
  getDetailHomeWork(id): Observable<HomeWork> {
    return this.http
      .get(`api/homework/${id}`)
      .pipe(map((res: any) => res.Payload));
  }
}
