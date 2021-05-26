import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewModel } from '../models/new.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
<<<<<<< HEAD

    constructor(
        protected http: HttpClient
    ) { }
    getNews(param: any): Observable<NewModel> {
        const paramReq = new HttpParams({ fromObject: param });
        return this.http.get(`/api/news?${paramReq}`).pipe(map((res: any) => res.Payload));
    }
=======
  constructor(protected http: HttpClient) {}
  getNews(param: any): Observable<NewModel> {
    const paramReq = new HttpParams({ fromObject: param });
    return this.http
      .get(`/api/news?${paramReq}`)
      .pipe(map((res: any) => res.Payload));
  }
>>>>>>> e2ce9a9c6956051bf34b23396707836d3d925ad7
}
