/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { AuthStoreService } from './service/auth.store';
import { LoginService } from './service/login.service';
import { ProfileService } from './service/profile.service';
import { TabsService } from './service/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private tabService: TabsService,
    private profileService: ProfileService,
    private authStoreService: AuthStoreService
  ) {
    this.profileService.getProfile().subscribe((res) => {
      this.authStoreService.set({ ClassId: res[0].ClassId });
      this.authStoreService.set({ StudentId: res[0].StudentId });
    });
  }
}
