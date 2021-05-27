import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SemsterModel } from '../models/semster.model';
import { BaseApiService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SemsterService extends BaseApiService<SemsterModel> {
  constructor(protected http: HttpClient) {
    super(http, ' api/semster');
  }
}
