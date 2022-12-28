import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  title = 'Paises App';
  year = new Date().getFullYear();
  constructor() {}
}
