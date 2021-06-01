import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseApiService<any> {
  constructor(protected http: HttpClient) {
    super(http, 'api/account/ChangePassword');
  }
}
