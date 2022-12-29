import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerPaisRouteModule } from './ver-pais.route';
import { VerPaisComponent } from './ver-pais.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [VerPaisRouteModule, CommonModule],
  declarations: [VerPaisComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VerPaisModule {}
