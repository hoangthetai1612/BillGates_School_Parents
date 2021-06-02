import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationModel } from '../models/notification.model';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) { }
  getAllNotification(keyword): Observable<NotificationModel[]> {
    return this.http
      .get(`/api/announcement/combine?keyword=${keyword}`)
      .pipe(map((res: any) => res.Payload));
  }
  updateStatusNoti(NotificationId): Observable<NotificationModel> {
    return this.http.put(`/api/Notification/Status/${NotificationId}`, '').pipe(map((res: any) => res.Payload))
  }
  updateStatusAnnouncementId(AnnouncementId): Observable<NotificationModel> {
    return this.http.put(`/api/Announcement/Status/${AnnouncementId}`, '').pipe(map((res: any) => res.Payload))
  }
}
