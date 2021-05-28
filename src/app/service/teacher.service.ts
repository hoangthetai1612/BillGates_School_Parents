import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeacherModel } from '../models/teacher.model';
import { BaseApiService } from './base.service';

@Injectable({
    providedIn: 'root',
})
export class TeacherService extends BaseApiService<TeacherModel> {
    constructor(protected http: HttpClient) {
        super(http, 'api/teacher');
    }

    getDetailTeacher(StudentAbsenceRequestId): Observable<TeacherModel> {
        return this.http.get<TeacherModel>(`api/StudentAbsenceRequest/${StudentAbsenceRequestId}`).pipe(map((res: any) => res.Payload));
    }
}
