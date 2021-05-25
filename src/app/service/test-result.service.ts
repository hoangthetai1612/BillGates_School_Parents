import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TestResult } from '../models/test-result.model';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TestResultService extends BaseApiService<TestResult> {
  constructor(protected http: HttpClient) {
    super(http, 'api/TestResult');
  }

  getDetailTestById(studentId, semesterId, subjectId) {
    this.http
      .get(
        `api/TestResult?StudentId=${studentId}&SemesterId=${semesterId}&SubjectId=${subjectId}`
      )
      .pipe(map((res: any) => res.Payload));
  }
}
