import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardRouteModule } from './dashboard.route';
import { DashboardComponent } from './dashboard.component';
import { PorCapitalModule } from 'src/app/pais/pages/por-capital/por-capital.module';

@NgModule({
  imports: [DashboardRouteModule, PorCapitalModule],
  declarations: [DashboardComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
