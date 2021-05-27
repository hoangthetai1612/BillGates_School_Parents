import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { TabsService } from './service/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private tabService: TabsService) {}
}
