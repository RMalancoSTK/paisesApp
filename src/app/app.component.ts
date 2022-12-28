import { Component } from '@angular/core';
import { AppSettingsService } from './services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appSettingsService: AppSettingsService) {}
  title = this.appSettingsService.title;
}
