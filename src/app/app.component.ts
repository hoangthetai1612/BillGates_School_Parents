import { Component } from '@angular/core';
import { TabsService } from './service/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private tabService: TabsService) {
    localStorage.setItem('role', 'teacher');
  }
}
