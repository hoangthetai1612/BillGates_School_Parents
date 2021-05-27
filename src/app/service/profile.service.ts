import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(protected http: HttpClient) {}
  getProfile(): Observable<ProfileModel> {
    if (localStorage.getItem('role') === 'Parents') {
      return this.http
        .get(`api/parents/username`)
        .pipe(map((res: any) => res.Payload));
    } else {
      return this.http
        .get(`api/teacher/username/parent`)
        .pipe(map((res: any) => res.Payload));
    }
  }
  getDetailProfileTeacher(): Observable<ProfileModel> {
    return this.http
      .get(`api/teacher/username`)
      .pipe(map((res: any) => res.Payload));
  }
  updateProfile(data): Observable<ProfileModel> {
    if (localStorage.getItem('role') === 'Parents') {
      return this.http
        .put(`api/parent/username`, data)
        .pipe(map((res: any) => res));
    } else {
      return this.http
        .put(`api/teacher/username`, data)
        .pipe(map((res: any) => res));
    }
  }
}
