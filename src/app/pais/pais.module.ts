import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [CommonModule],
  exports: [HomeComponent, DashboardComponent],
})
export class PaisModule {}
