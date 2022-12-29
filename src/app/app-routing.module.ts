import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pais/pages/dashboard/dashboard.component';
import { HomeComponent } from './main/pages/home/home.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { WelcomeComponent } from './pais/pages/welcome/welcome.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';

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
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'porcapital',
        component: PorCapitalComponent,
      },
      {
        path: 'porpais',
        component: PorPaisComponent,
      },
      {
        path: 'porregion',
        component: PorRegionComponent,
      },
      {
        path: 'verpais',
        loadChildren: () =>
          import('./pais/pages/ver-pais/ver-pais.module').then(
            (m) => m.VerPaisModule
          ),
      },
      {
        path: 'verpais/:id',
        loadChildren: () =>
          import('./pais/pages/ver-pais/ver-pais.module').then(
            (m) => m.VerPaisModule
          ),
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'welcome',
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
