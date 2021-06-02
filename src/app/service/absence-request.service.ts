/* eslint-disable @typescript-eslint/naming-convention */
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

  getListAbsenceById(studentId): Observable<DetailAbsenceRequest[]> {
    return this.http
      .get(`api/StudentAbsenceRequest?StudentId=${studentId}`)
      .pipe(map((res: any) => res.Payload));
  }

  getStudentAbsenceRequests(ClassId): Observable<DetailAbsenceRequest[]> {
    return this.http
      .get(`api/StudentAbsenceRequest/Class/${ClassId}`)
      .pipe(map((res: any) => res.Payload));
  }

  createAbsenceById(studentId, data): Observable<any> {
    return this.http
      .post(`api/StudentAbsenceRequest?StudentId=${studentId}`, data)
      .pipe(map((res: any) => res.Payload));
  }

  approveAbsenceRequests(studentAbsenceRequestId, data): Observable<any> {
    return this.http.put(`api/StudentAbsenceRequest/${studentAbsenceRequestId}`, data);
  }

}
