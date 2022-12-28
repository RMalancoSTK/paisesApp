import { Component } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  constructor(private appSettingsService: AppSettingsService) {}
  title = this.appSettingsService.title;
  year = this.appSettingsService.year;
}
