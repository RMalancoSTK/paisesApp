import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PorCapitalRouteModule } from './por-capital.route';
import { PorCapitalComponent } from './por-capital.component';

@NgModule({
  imports: [PorCapitalRouteModule],
  declarations: [PorCapitalComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PorCapitalComponent],
})
export class PorCapitalModule {}
