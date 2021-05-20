/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  API_URL = 'https://li1jm77bc8.execute-api.ap-southeast-1.amazonaws.com';
  constructor(
    protected http: HttpClient // private storageService: LocalStorageService
  ) {}

  getListMessage(receiveUser: any) {
    const loginUser: any = JSON.parse(
      localStorage.getItem('access_token') as any
    );
    return this.http.get(this.API_URL + '/prod/user/message', {
      params: {
        userProfileId1: loginUser.UserProfileId,
        userProfileId2: receiveUser,
        pageNumber: '1',
        pageSize: '50',
      },
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + loginUser.access_token,
      }),
    });
  }
}
