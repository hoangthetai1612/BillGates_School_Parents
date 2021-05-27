/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends BaseApiService<any> {
  constructor(
    protected http: HttpClient // private storageService: LocalStorageService
  ) {
    super(http, 'api/message');
  }

  getListMessage(receiveUser: any) {
    return this.http.get(`api/message`, {
      params: {
        SenderUserProfileId: receiveUser,
      },
    });
  }
}
