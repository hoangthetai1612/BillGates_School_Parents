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
}
