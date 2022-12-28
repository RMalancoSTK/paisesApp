import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PaisModule } from '../pais/pais.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  exports: [HomeComponent, DashboardComponent],
  imports: [CommonModule, PaisModule, SharedModule],
})
export class MainModule {}
