import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private serializer: UrlSerializer, private router: Router) { }
  public get(url: string, param?: any): Observable<any> {
    let urlReq = `${environment.API_URL}/${url}`;
    if (param !== undefined) {
      const paramReq = new HttpParams ({fromObject: param});
      urlReq = `${urlReq}?${paramReq}`;
      console.log(urlReq)
    }
    return this.http
      .get<any>(
        urlReq
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 400) {
          }
          return throwError(err);
        })
      );
  }
  public post(url: string, body: any): Observable<any> {
    let urlReq = `${environment.API_URL}/${url}`;
    return this.http
      .post<any>(
        urlReq,
        body,
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 400) {
          }
          return throwError(err);
        })
      );
  }
}
