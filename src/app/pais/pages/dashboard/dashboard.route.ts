import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoute: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'porcapital',
    loadChildren: () =>
      import('../por-capital/por-capital.module').then(
        (m) => m.PorCapitalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoute)],
  exports: [RouterModule],
})
export class DashboardRouteModule {}

// el selector se en html sera: <app-dashboard-route></app-dashboard-route> para cambiar el nombre de este selector se debe modificar el archivo src\app\pais\pages\dashboard\dashboard.route.ts
// y si no agregar la propiedad selector en el archivo dashboard.component.ts: @Component({ selector: 'app-dashboard-route', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'] })
//
