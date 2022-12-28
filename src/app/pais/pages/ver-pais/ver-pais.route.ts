import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPaisComponent } from './ver-pais.component';

const verPaisRoute: Routes = [
  {
    path: '',
    component: VerPaisComponent,
    data: {
      title: 'Ver Pais',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(verPaisRoute)],
  exports: [RouterModule],
})
export class VerPaisRouteModule {}
