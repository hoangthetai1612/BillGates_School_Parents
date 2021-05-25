import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NewModel } from "../models/new.model";

@Injectable({
    providedIn: "root"
})
export class NewsService {

    constructor(
        protected http: HttpClient
    ) { }
    getNews(param: any): Observable<NewModel> {
        const paramReq = new HttpParams ({fromObject: param});
        return this.http.get(`/api/news?${paramReq}`).pipe(map((res: any) => res.Payload));
    }
    postNews(data): Observable<NewModel> {
        return this.http.post(`/api/news`, data).pipe(map((res: any) => res));
    }
    editNews(data, newsId): Observable<NewModel> {
        return this.http.put(`/api/news/${newsId}`, data).pipe(map((res: any) => res));
    }
    deleteNews(data, newsId): Observable<NewModel> {
        return this.http.delete(`/api/news/${newsId}`, data).pipe(map((res: any) => res));
    }
}
