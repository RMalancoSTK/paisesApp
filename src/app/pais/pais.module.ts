import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HomeComponent, DashboardComponent],
})
export class PaisModule {}
