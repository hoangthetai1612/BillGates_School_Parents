import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentModel } from '../models/student.model';
import { BaseApiService } from './base.service';

@Injectable({
    providedIn: 'root',
})
export class StudentService extends BaseApiService<StudentModel[]> {
    constructor(protected http: HttpClient) {
        super(http, 'api/student');
    }

    getStudentsByTeacher(): Observable<StudentModel[]> {
        return this.http.get<StudentModel[]>('api/student/username/teacher').pipe(map((res: any) => res.Payload));
    }

    getStudentsByClass(classId): Observable<StudentModel[]> {
        return this.http.get<StudentModel[]>(`api/student?ClassId=${classId}`).pipe(map((res: any) => res.Payload));
    }
}
