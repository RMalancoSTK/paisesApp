import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pais/pages/dashboard/dashboard.component';
import { HomeComponent } from './pais/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'porcapital',
        loadChildren: () =>
          import('./pais/pages/por-capital/por-capital.module').then(
            (m) => m.PorCapitalModule
          ),
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
