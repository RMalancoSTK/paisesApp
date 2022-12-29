import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  declarations: [DashboardComponent, PorPaisComponent, PaisTablaComponent, PaisInputComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule],
  exports: [DashboardComponent, PorPaisComponent],
})
export class PaisModule {}
