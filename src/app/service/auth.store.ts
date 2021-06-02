import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { ProfileModel } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService extends RxState<ProfileModel> {
  classId$ = this.select('ClassId');
  studentId$ = this.select('StudentId');
  userName$ = this.select('UserName');
}
