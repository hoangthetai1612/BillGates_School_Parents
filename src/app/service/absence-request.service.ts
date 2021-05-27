import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailAbsenceRequest } from '../models/detail-absence-request.model';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AbsenceRequestService extends BaseApiService<
  DetailAbsenceRequest[]
> {
  constructor(protected http: HttpClient) {
    super(http, 'api/StudentAbsenceRequest');
  }

  getListAbsenceById(studetId): Observable<DetailAbsenceRequest[]> {
    return this.http
      .get(`api/StudentAbsenceRequest?StudentId=${studetId}`)
      .pipe(map((res: any) => res.Payload));
  }
}
