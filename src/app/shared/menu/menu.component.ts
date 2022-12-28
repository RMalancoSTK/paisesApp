import { Component } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  constructor(private appSettingsService: AppSettingsService) {}

  title = this.appSettingsService.title;
}
