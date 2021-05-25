import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject } from '../models/subject.model';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectService extends BaseApiService<Subject[]> {
  constructor(protected http: HttpClient) {
    super(http, 'api/subject');
  }

  getListSubjectByTerm(semesterId, classId) {
    this.http
      .get(`api/subject?SemesterId=${semesterId}&ClassId=${classId}`)
      .pipe(map((res: any) => res.Payload));
  }
}
