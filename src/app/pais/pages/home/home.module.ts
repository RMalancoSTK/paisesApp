import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeRouteModule } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRouteModule],
  declarations: [HomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
