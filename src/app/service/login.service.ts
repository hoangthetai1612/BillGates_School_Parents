/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }
  postDevice(data): Observable<any> {
    return this.http.post(`api/postdevice`, data);
  }
  deleteDevice(data): Observable<any> {
    return this.http.delete(`api/postdevice`, data);
  }
  public login(data: Login): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    const body = `grant_type=${data.grant_type}&username=${data.username}&password=${data.password}`;
    return this.http.post<any>(`Token`, body, httpOptions);
  }
}
