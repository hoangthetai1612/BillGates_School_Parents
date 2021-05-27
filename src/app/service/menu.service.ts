/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DishMenu, DishMenuOverview } from '../models/dishMenu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(protected http: HttpClient) {}
  getDishMenuByTimePeriod(param: any): Observable<DishMenuOverview[]> {
    const req = {
      FromDate: '2020-08-20T00:00:00',
      ToDate: '2020-08-27T00:00:00',
      ClassId: 25,
      DayValue: 3,
    };
    const paramReq = new HttpParams({ fromObject: param });
    return this.http
      .get(`/api/DishMenu?${paramReq}`)
      .pipe(map((res: any) => res.Payload));
  }
  getDishMenu(param: any): Observable<DishMenu> {
    const paramReq = new HttpParams({ fromObject: param });
    return this.http
      .get(`/api/DishMenu?${paramReq}`)
      .pipe(map((res: any) => res.Payload));
  }
  uploadDishMenu(data): Observable<any> {
    return this.http
      .post(`api/DishMenu/upload`, data)
      .pipe(map((res: any) => res));
  }
  updateDishMenu(data, dishMenuId): Observable<any> {
    return this.http
      .put(`api/DishMenu/${dishMenuId}`, data)
      .pipe(map((res: any) => res));
  }
}
